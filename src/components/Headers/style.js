import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`

background-color: #1f1f1f;
width: 100%;
min-height: 72px;


`
export const Content = styled.div`

display: flex;
align-items: center;
justify-content: space-between;
padding: 7px 20px;

width: 100%;
max-width: 1280px;
margin: 0 auto;


`

export const Navigation = styled.nav`

display: flex;
align-items: center;
justify-content: center;
height: 72px;
 
div{
margin-left: 56px;
display: flex;
justify-content: center;
align-items: center;
gap: 20px;

}

hr{
height: 24px;
border: 1px solid #625e5e

}


`

export const LinkHeader = styled(Link)`

color: ${(props) => (props.$isActive ? '#9758a6' : '#fff')};
border-bottom:  ${(props) => (props.$isActive ? '1px solid #b0b0b0eb' : 'none')};
padding: 2px;
text-decoration: none;
font-family: "Poppins", sans-serif;
font-size: 18px;
transition: color 200ms ;

&:hover {
color: #9758a6;

}
`



export const Options = styled.div`

display: flex;
align-items: center;
justify-content: center;
gap: 48px;


`

export const Profile = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-family: "Poppins", sans-serif;
gap: 5px;

p {

color: #fff;
line-height: 90%;
font-weight: 300;
margin-top: 17px;

}

span {
    font-weight: 600;
    color: #9758a6;
    
}

div {

display: flex;
flex-direction: column;
gap: 8px;

}


`



export const Logout = styled.button`

color: #ff3205;
background-color: transparent;
border: none;


`



export const IconCarrinho = styled.div`

display: flex;
align-items: center;
gap: 7px;

`