import styled from 'styled-components';




export const Container = styled.div`
 
.carousel-item {
padding-right: 40px;

}

overflow-x: hidden;

 
 .react-multi-carousel-list   {

 overflow: visible;


 }

padding-bottom: 40px;
padding-left: 20px;


  
`;

export const Title = styled.h2`

font-family: "Poppins", sans-serif;
font-size: 32px;
font-weight: 800;
color: #61A120;
padding-bottom: 12px;
position: relative;
text-align: center;
margin: 70px 0;


&::after {

content: '';
position: absolute;
width: 58px;
height: 4px;
background-color: #61A120;
bottom: 0;
left: calc(50% - 25px)

}
`;


export const ContainerItems = styled.div`

background: url(${(props) => props.imageUrl}) no-repeat;
background-size: cover;
background-position: center;
border-radius: 20px;

width: 100%;
height: 250px;
display: flex;
align-items: center;
padding: 20px 15px;


`;
