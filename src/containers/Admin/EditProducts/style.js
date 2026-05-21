import styled from 'styled-components';
import ReactSelect from 'react-select';
import { Button } from '../../../components/Button';

export const Container = styled.div`

display: flex;
align-items: center;
justify-content: center;
min-height: 100vh;



`


export const Form = styled.form`

border-radius: 20px;
background-color: #363636;
padding: 32px;
width: 100%;
max-width: 380px;
display: flex;
flex-direction: column;
gap: 26px;



`


export const InputGroup = styled.div`

display: flex;
flex-direction: column;
gap: 8px;

`


export const Label = styled.label`

color: #fff;
font-size: 14px;
font-family: 'Poppins', sans-serif;

`

export const Input = styled.input`

    height: 40px;
    border-radius: 5px;
    border: none;
    width: 100%;
    padding: 0 12px;;

`


export const LabelUpload = styled.label`

    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    border: 1px dashed #fff;
    border-radius: 5px;
    height: 40px;
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
    padding: 16px;
    color: #fff;
    font-weight: 300;


> svg {

width: 20px;
height: 20px;
fill: #fff;
}

    input {
    display: none;
}

&:hover {
    opacity: 0.6;
}

`

export const Select = styled(ReactSelect)`

font-family: 'Poppins', sans-serif;


`


export const SubmitButton = styled.button`

    background-color: #9758a6;
    border: none;
    height: 49px;
    border-radius: 9px;
    font-family: 'Poppins';
    color: #fff;
    font-weight: 500;
    margin-top: 16px;
    font-size: 1rem;

&:hover {

background-color: #772c89;
transition: background-color 0.3s ease;
}


`


export const ErrorMessage = styled.span`

font-family: 'Poppins', sans-serif;
color: #cf3057;
font-size: 14px;
line-height: 80%;
font-weight: 600;


`

export const ContainerCheckbox = styled.div`

display: flex;
gap: 8px;
font-family: 'Poppins', sans-serif;
cursor: pointer;

input {
    width: 16px;
}


`