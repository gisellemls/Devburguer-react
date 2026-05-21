import { Banner, Container, Content, Title } from './style.js';
import { CardItems, CardResume } from '../../components/index.js';



export function Cart() {

    return (

        <Container>

            <Banner></Banner>

            <Title>Checkout - Pedido</Title>
            <Content>
                <CardItems />
                <CardResume />


            </Content>

        </Container>






    )




}