import { useState } from "react";
import {
    PaymentElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import './styles.css'
import { useCart } from "../../../hooks/CartContext";
import { useNavigate } from "react-router-dom";
import { api } from '../../../services/Api.js';
import { toast } from "react-toastify";



export default function CheckoutForm() {

    const { cartProducts, ClearCart } = useCart()
    const navigate = useNavigate()


    const stripe = useStripe();
    const elements = useElements();
    const { state: { dpmCheckerLink },

    } = useLocation();



    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            console.error('Erro, tente novamente')
            return;
        }

        setIsLoading(true);

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            redirect: 'if_required',
        });


        if (error) {
            // Se o cartão for recusado ou der erro na rede
            setMessage(error.message);
            toast.error(error.message)
        } else if (paymentIntent && paymentIntent.status === 'succeeded') {
            // Se o Stripe aprovar a compra! 🎉
            setMessage("Pagamento aprovado com sucesso!");
            try {

                const products = cartProducts.map((product) => {

                    return { id: product.id, quantity: product.quantity, price: product.price }

                });

                const { status } = await api.post('/orders', { products },

                    {

                        validateStatus: () => true,
                    }
                );


                if (status === 200 || status === 201) {

                    setTimeout(() => {

                        navigate(`/CompletePayment?payment_intent_client_secret=${paymentIntent.client_secret}`);
                        ClearCart()

                    }, 2000);



                    toast.success('Pedido realizado com sucesso!')



                } else if (status === 409) {
                    toast.error('Falha ao realizar o pedido')

                } else {
                    throw new Error();

                }



            } catch (error) {

                toast.error('Falha no sistema! Tente novamente.')
            }

        } else {
            navigate(`/CompletePayment?payment_intent_client_secret=${paymentIntent.client_secret}`);
        }

        setIsLoading(false);
    };

    const paymentElementOptions = {
        layout: "accordion"
    }

    return (
        <div className="Container">
            <form id="payment-form" onSubmit={handleSubmit}>

                <PaymentElement id="payment-element" options={paymentElementOptions} />
                <button type='submit' disabled={isLoading || !stripe || !elements} id="submit" className="button">
                    <span id="button-text">
                        {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
                    </span>
                </button>

                {message && <div id="payment-message">{message}</div>}

            </form>
        </div>
    );
}