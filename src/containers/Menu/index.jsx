import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    Container,
    Banner,
    CategoryMenu,
    MenuProducts,
    CategoryButton,
} from './style';
import { api } from '../../services/Api';
import { CardProduct } from '../../components/CardProduct';
import { formatPrice } from '../../utils/formatprice';

export function Menu() {

    const navigate = useNavigate()

    // Estados para armazenar as categorias, produtos e produtos filtrados //
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filterdProducts, setFilteredProducts] = useState([])


    // useLocation para obter os parâmetros de consulta da URL, que serão usados para definir a categoria ativa //
    const { search } = useLocation();


    const queryParams = new URLSearchParams(search);



    const [activeCategory, setActiveCategory] = useState(() => {
        const categoryId = +queryParams.get('categoria');
        if (categoryId) {
            return categoryId
        }
        return 0;
    })


    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');

            const newCategories = [{ id: 0, name: 'Todas' }, ...data];

            setCategories(newCategories);
        }

        async function loadProducts() {
            const { data } = await api.get('/products');

            const newProducts = data.map((product) => ({
                currencyValue: formatPrice(product.price),
                ...product,
            }));

            setProducts(newProducts);
        }

        loadCategories();
        loadProducts();
    }, []);



    useEffect(() => {

        if (activeCategory === 0) {
            setFilteredProducts(products);
        } else {

            const newFilterProducts = products.filter(
                (product) => product.category_id === activeCategory,
            );

            setFilteredProducts(newFilterProducts)
        }



    }, [products, activeCategory]
    );



    return (
        <Container>
            <Banner>
                <h1>
                    O MELHOR
                    <br />
                    HAMBÚRGUER
                    <br />
                    ESTÁ AQUI!
                </h1>
                <span>Esse cardápio está irresistível!</span>
            </Banner>

            <CategoryMenu>
                {categories.map((category) => (
                    <CategoryButton

                        $isActiveCategory={category.id === activeCategory}


                        key={category.id}
                        onClick={() => {
                            navigate(
                                {
                                    pathname: '/cardapio',
                                    search: `?categoria=${category.id}`,
                                },
                                {
                                    replace: true,
                                },

                            );

                            setActiveCategory(category.id)


                        }}

                    >{category.name}</CategoryButton>
                ))}
            </CategoryMenu>

            <MenuProducts>
                {filterdProducts.map((product) => (
                    <CardProduct product={product} key={product.id} />
                ))}
            </MenuProducts>
        </Container>
    );
}
