import { Banner, Container, Content } from "./styled";

import { CategoryCarrosel } from '../../components/CategoryCarrosel/index.jsx';
import { OfertasCarrosel } from "../../components/OfertasCarrosel/index.jsx";
import { useUser } from '../../hooks/UserContext.jsx';



export function Home() {
    console.log(useUser())
    return (

        <main>

            <Banner>
                <h1>Bem-vindo!</h1>
            </Banner>

            <Container>

                <Content>

                    <CategoryCarrosel />
                    <OfertasCarrosel />

                </Content>


            </Container >
        </main >

    )


};