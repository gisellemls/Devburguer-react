import { useEffect, useState } from 'react';
import { api } from '../../services/Api.js';
import CarouselPkg from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Carousel = CarouselPkg.default ? CarouselPkg.default : CarouselPkg;

import { Container, Title } from './styles.js';
import { CardProduct } from '../CardProduct/index.jsx';
import { formatPrice } from '../../utils/formatprice.js';

// Componente para exibir as categorias em um carrossel & ele busca as categorias na API e exibe o nome de cada categoria no carrossel // 
export function OfertasCarrosel() {

    // Estado para armazenar as categorias //
    const [offers, setOffers] = useState([]);

    // useEffect para carregar as categorias da API quando o componente for montado //
    useEffect(() => {
        async function loadProducts() {
            const { data } = await api.get('/products');
            const onlyOffers = data.filter((product) => product.offer).map((product) => ({
                currencyValue: formatPrice(product.price),
                ...product,
            }));


            setOffers(onlyOffers)
        }

        loadProducts();
    }, []);

    // Configurações de responsividade para o carrossel //
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1280, min: 690 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 690, min: 0 },
            items: 2,
        },
    };

    return (
        <Container>
            <Title>OFERTAS DO DIA</Title>


            <Carousel
                responsive={responsive}
                infinite={true}
                partialVisible={false}
                itemClass="carousel-item"
            >


                {offers.map(product => (

                    <CardProduct key={product.id} product={product} />


                ))}


            </Carousel>


        </Container>
    );
}
