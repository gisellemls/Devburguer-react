import { useLocation } from "react-router-dom"
import { Elements } from "@stripe/react-stripe-js";
import stripePromisse from '../../Config/StripeConfig';
import CheckoutForm from "../../components/Stripe/CheckoutForm";


export function Checkout() {

    const {
        state: { clientSecret },

    } = useLocation();


    if (!clientSecret) {
        return <div>Erro, volte e tente novamente!</div>

    }

    console.log(clientSecret)


    return (
        <Elements stripe={stripePromisse} options={{ clientSecret }}>
            <CheckoutForm />
        </Elements>
    )



}



