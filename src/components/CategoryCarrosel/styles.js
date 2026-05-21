import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
 
.carousel-item {
padding: 40px;

}

 padding-left: 20px;

`;

export const Title = styled.h2`

font-family: "Poppins", sans-serif;
font-size: 32px;
font-weight: 800;
color: #9758a6;
padding-bottom: 12px;
position: relative;
text-align: center;
margin-top: 16px;
// background: red;
// padding-bottom: 12px;

&::after {

content: '';
position: absolute;
width: 58px;
height: 4px;
background-color: #9758a6;
bottom: 0;
left: calc(50% - 25px)

}
`;

export const ContainerItems = styled.div`

background: url(${(props) => props.$imageUrl}) no-repeat;
background-size: cover;
background-position: center;
border-radius: 20px;

width: 100%;
height: 250px;
display: flex;
align-items: center;
padding: 20px 15px;


`;


export const LinkButton = styled(Link)`


font-family: "Poppins", sans-serif;
font-weight: 500;
font-size: 18px;
color: #fff;
background-color: rgba(0, 0, 0, 0.5);
padding: 8px 20px;
border-radius: 30px;
margin-top: 80px;
text-decoration: none;

&:hover {
    
    background-color:   #a250b698 ;
}




`