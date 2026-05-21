import styled from "styled-components";
import Backburguer from '../../assets/backburguer.svg';
import back from '../../assets/back.svg';
import { Link } from "react-router-dom";


export const Container = styled.div`

width: 100%;
min-height: 100vh;

background: url('${back}');
background-color: #f0f0f0;
padding-bottom: 40px;




`


export const Banner = styled.div`


display: flex;
align-items: center;
justify-content: center;

width: 100%;
height: 480px;
background: url('${Backburguer}') no-repeat;
background-position: center;
background-size: cover;
background-color: #1f1f1f;
position: relative;




    h1 {

color: #f7f7f7e3;
font-family: "Road Rage", sans-serif;
text-align: center;
line-height: 70px;
position: absolute;
right: 28.7%;
top: 26%;
font-size: 80px;

    }

span{

color: #f7f7f7e3;
font-family: "Poppins", sans-serif;
position: absolute;
font-size: 17px;
right: 29.5%;
top: 70%


}



`


export const CategoryMenu = styled.div`

display: flex;
justify-content: center;
gap: 55px;
margin-top: 50px;


`


export const CategoryButton = styled(Link)`

text-decoration: none;
font-family: "Poppins", sans-serif;
font-size: 23px;
font-weight: 540;
border: none;
color: ${props => props.$isActiveCategory ? '#d46f11' : '#6e6767'};
border-bottom: ${(props) => props.$isActiveCategory && '3px solid #d46f11'};


`

export const MenuProducts = styled.div`

display: grid;
grid-template-columns: repeat(3, 1fr);
padding: 40px;
justify-content: center;
max-width: 1280px;
gap: 80px;
margin: 50px auto;


`

