import styled from 'styled-components';

export const Container = styled.div`

width: 80%;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
padding: 20px;
border-radius: 8px;
background-color: #ffffff;
cursor: grab;
box-shadow: rgba(0,0,0,0.35) 0px 5px 15px;
position: relative;


div{

width: 100%;
height: 120px;
display: flex;
flex-direction: column;
justify-content: space-between;



}

p { 

font-family: "Poppins", sans-serif;
font-size: 18px;
color: #ff8c05;
line-height: 20px;
font-weight: 800;
margin-top: 58px;
 
}

strong {
font-family: "Poppins", sans-serif;
font-size: 20px;
color: #363636;
font-weight: 700;;
line-height: 20px;
margin-top: 10px;
}




`;

export const CardImage = styled.img`

height: 100px;
position: absolute;
top: -50px;


`;
