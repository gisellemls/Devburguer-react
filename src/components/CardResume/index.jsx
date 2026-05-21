import { Button } from '../Button/index.jsx';
import { Container, ButtonResume, ContainerClass } from './style.js';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/CartContext.jsx';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../../services/Api.js';
import { formatPrice } from '../../utils/formatprice.js';


export function CardResume() {

    const navigate = useNavigate()

    const [finalPrice, setFinalPrice] = useState(0);

    const [deliveryTax] = useState(500);

    const { cartProducts, ClearCart } = useCart();

    useEffect(() => {

        const sumAllItems = cartProducts.reduce((acc, current) => {

            return current.price * current.quantity + acc;

        }, 0);


        setFinalPrice(sumAllItems)
    }, [cartProducts])

    const submitOrder = async () => {

        const products = cartProducts.map((product) => {

            return { id: product.id, quantity: product.quantity, price: product.price, deliveryTax: deliveryTax, }

        });

        try {

            const { data } = await api.post('/create-payment-intent', { products });

            navigate('/checkout', {
                state: data,


            });


        } catch (_err) {

            toast.error('Erro, tente novamente!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",

            });
        }

    };

    return (

        <Container>
            <ContainerClass>

                <div className="container-top">

                    <div className='resume'>
                        <h2>Resumo do Pedido</h2>
                    </div>
                    <div className='itens'>
                        <p>Itens</p>
                        <p>{formatPrice(finalPrice)}</p>
                    </div>
                    <div className='entrega'>
                        <p>Taxa de Entrega</p>
                        <p>{formatPrice(deliveryTax)}</p>
                    </div>

                </div>

                <div className="container-bottom">

                    <p className='total'>Total</p>
                    <p className='value'>{formatPrice(finalPrice + deliveryTax)}</p>

                </div>


            </ContainerClass>
            <ButtonResume onClick={submitOrder}>Continuar</ButtonResume>
        </Container>

    )




}