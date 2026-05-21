import { navLinks } from './Navlink.jsx';
import Mordern from '../../assets/Minimalist.jpg';
import { LinkIcon, SignOut } from '@phosphor-icons/react'
import { Container, Footer, NavContainer, Navlink } from './style.js';
import { useUser } from '../../hooks/UserContext.jsx';
import { useResolvedPath } from 'react-router-dom';


export function NavMenu() {

    const { logout } = useUser();
    const { pathname } = useResolvedPath();



    return (

        <Container>

            <img src={Mordern} alt='logo-minimalista-houseburguer' />

            <NavContainer>
                {navLinks.map((link) => (
                    <Navlink $isActive={pathname === link.path} key={link.id} to={link.path}>
                        {link.icon}
                        <span>{link.label}</span>
                    </Navlink>
                ))}
            </NavContainer>
            <Footer>

                <Navlink to='/login' onClick={logout}>
                    <SignOut />
                    <span>Sair</span>
                </Navlink>


            </Footer>



        </Container>


    )




}