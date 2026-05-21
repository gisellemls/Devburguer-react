import { Link } from "react-router-dom";
import styled from "styled-components";



export const Container = styled.div`

    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #363636;
    align-items: center;
    justify-content: space-evenly;

img{
    width: 100px;
}

`

export const NavContainer = styled.nav`

    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    margin-bottom: 85px;

`
export const Navlink = styled(Link)`
    display: flex;
    gap: 15px;
    text-decoration: none;
    color: #fff;
    font-family: 'Poppins';
    font-size: 20px;
    align-items: center;
    padding: 6px 20px;
    background-color:  ${(props) => (props.$isActive ? '#9758a6' : 'none')};

    &:hover{
   background-color: #9758a6;
   transition: 0.3s ease-in-out;

    }




`





export const Footer = styled.footer`

width: 100%;



`


