import { Container, Navigation, LinkHeader, Options, Profile, IconCarrinho, Logout, Content } from "./style";
import { User, ShoppingCart } from "@phosphor-icons/react";
import { useNavigate, useResolvedPath } from "react-router-dom";
import { useUser } from '../../hooks/UserContext';


export function Header() {

    const navigate = useNavigate();

    const { logout, userInfo } = useUser()

    const { pathname } = useResolvedPath();

    function logoutuser() {
        logout();
        navigate('/login');

    }


    return (
        <Container>
            <Content>
                <Navigation>
                    <div>
                        <LinkHeader to="/" $isActive={pathname === '/'}>Home</LinkHeader>
                        <hr></hr>
                        <LinkHeader to="/cardapio" $isActive={pathname === '/cardapio'}>Cardápio</LinkHeader>
                    </div>
                </Navigation>

                <Options>
                    <Profile>
                        <User color="#fff" size={24} />
                        <div>
                            <p>
                                Olá, <span>{userInfo.name}</span>
                            </p>
                            <Logout onClick={logoutuser}>Sair</Logout>
                        </div>
                    </Profile>
                    <IconCarrinho>
                        <ShoppingCart color="#fff" size={24} />
                        <LinkHeader to="/carrinho">Carrinho</LinkHeader>
                    </IconCarrinho>
                </Options>


            </Content>
        </Container>
    );
}
