import styled from "styled-components";



export const ProductImage = styled.img`

height: 113px;
width: 125px;
border-radius: 16px;



`

export const ButtonGroup = styled.div`

display: flex;
align-items: center;
gap: 12px;


span {

     width: 20px; /* 🚀 A MÁGICA: Trava a largura! Pode aumentar se achar pequeno */
    text-align: center; /* Garante que o número fique no meio desse espaço */
    

}


button {

display: flex;
align-items: center;
justify-content: center;
border-radius: 4px;
border: none;
width: 30px;
height: 30px;
background-color: #9758a6;
transition: all 0.4s;


&:hover{

background-color: #6f357c;

}

}


`

export const EmptyCart = styled.p`

font-size: 20px;
text-align: center;
font-weight: bold;


`

export const TrashImagem = styled.img`

height: 20px;
width: 20px;
cursor: pointer;


`