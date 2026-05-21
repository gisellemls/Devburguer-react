import styled from "styled-components";


export const ContainerButton = styled.button`

background-color: #9758a6;
width: 100%;
height: 52px;
border: 0;
border-radius: 5px;
transition: all 0.4s ;

&:hover{

background-color: #6f357c;

}

&:active {
      transform: scale(0.85); /* Encolhe o botão para 85% do tamanho original */
      filter: brightness(0.6);
}
`