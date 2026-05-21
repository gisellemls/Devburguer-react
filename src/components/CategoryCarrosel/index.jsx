import { useEffect, useState } from 'react';
import { api } from '../../services/Api.js';
import CarouselPkg from 'react-multi-carousel';
import { useNavigate } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';
const Carousel = CarouselPkg.default ? CarouselPkg.default : CarouselPkg;


import { Container, Title, ContainerItems, LinkButton } from './styles.js';


// Componente para exibir as categorias em um carrossel & ele busca as categorias na API e exibe o nome de cada categoria no carrossel // 
export function CategoryCarrosel() {

    const navigate = useNavigate()

    // Estado para armazenar as categorias //
    const [categories, setCategories] = useState([]);

    // useEffect para carregar as categorias da API quando o componente for montado //
    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');

            setCategories(data);
            console.log(data);
        }

        loadCategories();
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
            <Title>CATEGORIAS</Title>


            <Carousel
                responsive={responsive}
                infinite={true}
                partialVisible={false}
                itemClass="carousel-item"
            >


                {categories.map(category => (


                    <ContainerItems key={category.id} $imageUrl={category.url} onClick={() => {

                        navigate({
                            pathname: '/cardapio',
                            search: `?categoria=${category.id}`
                        })



                    }}>
                        <LinkButton>{category.name}</LinkButton>
                    </ContainerItems>

                ))}


            </Carousel>
        </Container>
    );
}
