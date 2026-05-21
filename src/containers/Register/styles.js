import styled from 'styled-components';
import { Link as ReactLink } from 'react-router-dom';
import HouseLogin from '../../assets/burguerlogin.png';
import BackLogin from '../../assets/back.svg';


export const RegisterContainer = styled.div`

display: flex;
height: 100vh;
width: 100vw;


`;

export const LeftContainer = styled.div`

background: url('${HouseLogin}');
background-size: cover;
background-position: center;
height: 100%;
width: 100%;



`;

export const RightContainer = styled.div`

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

background: url('${BackLogin}');
background-color: #1E1E1E;
background-repeat: no-repeat;
background-size: cover;
background-position: center;

height: 100%;
width: 100%;

p{
   color: #fff;
font-family: "Poppins", sans-serif;
font-size: 15px;
font-weight: 500;
}

a{
   color: #fff;
   font-family: "Poppins", sans-serif;
   font-weight: 500;
}

`;

export const Title = styled.h2`

 font-family: "Road Rage", sans-serif;
 font-size: 50px;
 color: #d46f11f8;

margin-bottom: 3.2rem;

`;

export const Form = styled.form`

display: flex;
flex-direction: column;
gap: 1.2rem;
padding: 20px;
width: 100%;
max-width: 400px;

`;

export const InputLogin = styled.div`

display: flex;
flex-direction:column;
gap: 4px;
margin-bottom: 1rem;
width: 100%;


input {
   width: 100%;
   height: 35px;
   border-radius: 5px;
   border: none;
   padding: 0 14px;
}

label {
color: #ffffffc1;
font-size: 15px;
font-weight: 400;
font-family: "Poppins", sans-serif;
}

p {

font-size: 14px;
height: 10px;
font-weight: 600;
color: #ca3359
}

`;

export const Link = styled(ReactLink)`

color: #fff;


`