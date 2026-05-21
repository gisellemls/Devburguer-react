import styled from 'styled-components';
import Select from 'react-select';


export const ProductImage = styled.img`

height: 80px;
padding: 12px;
border-radius: 16px;


`

export const StatusSelect = styled(Select)`

font-family: 'Poppins', sans-serif;
width: 240px;


`

export const Filter = styled.div`

display: flex;
justify-content: center;
margin: 28px 0;
gap: 50px;

`



export const FilterOptions = styled.button`

background-color: none;
border: none;
padding-bottom: 5px;
font-size: 16px;
color: ${(props) => (props.$isActiveStatus ? '#9758a6' : 'none')};
border-bottom: ${(props) => (props.$isActiveStatus ? '2px solid #9758a6' : 'none')};





`