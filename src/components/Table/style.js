import styled from "styled-components";




export const Root = styled.table`

    overflow: hidden;
    width: 100%;
    border-collapse: separate;
    background-color: #ffffff;
    border-radius: 40px;
    border-spacing: 0;
    table-layout: fixed;


`


export const Header = styled.thead``


export const Tr = styled.tr``


export const Th = styled.th`

padding: 16px;
background-color: #333232;
color: #fff;
border-bottom: 1px solid #cdcdcd;
font-family: "Poppins", sans-serif;
font-weight: 500;

`

export const Td = styled.td`

    padding: 13px 29px;
    color: #484848;
    font-weight: 500;
    line-height: 115%;
    font-family: 'Poppins';
    text-align: ${props => props.isAlignCenter ? 'center' : 'left'};

`


export const Body = styled.tbody``