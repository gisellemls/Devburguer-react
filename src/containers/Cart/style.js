import styled from "styled-components";
import BannerCart from "../../assets/bannerhorizontal.jpg";
import Background from "../../assets/back.svg";




export const Container = styled.div`

width: 100%;
background-color: #f0f0f0;
min-height: 100vh;
background: linear-gradient(rgba(255,255,255, 0.5), rgba(255, 255, 255, 0.5)
),
 url('${Background}');

`


export const Banner = styled.div`


background: url('${BannerCart}') no-repeat;
min-height: 28vh;
background-position: center;
background-size: cover;
background-color: #2d2929;



`

export const Title = styled.h2`

font-family: "Poppins", sans-serif;
font-size: 32px;
font-weight: 800;
margin-top: 33px;
color: #61A120;
text-align: center;

display: flex;
flex-direction: column;
align-items: center;
gap: 6px;


&::after {

    content: ''; 
    width: 57px; 
    height: 4px; 
    background-color: #61A120; 
    border-radius: 2px;




}


`


export const Content = styled.div`


display: grid;
grid-template-columns: 1fr 20%;
gap: 40px;
width: 100%;
max-width: 1280px;
padding: 40px;
margin-left: 10%;



`


export const CardResume = styled.div``