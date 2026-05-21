import styled from "styled-components";
import BannerHome from "../../assets/bannerhome.svg";
import Background from "../../assets/back.svg";


export const Banner = styled.div`

background: url('${BannerHome}');
background-size: cover;
background-position: center;
height: 480px;
position: relative;

h1{

    color: #ffffffd7;
    font-size: 55px;
    font-family: "Road Rage", sans-serif;
    letter-spacing: 0.02em;
    position: absolute;
    right: 15%;
    top: 10%;


}


`

export const Container = styled.div`

background: linear-gradient(rgba(255,255,255, 0.5), rgba(255, 255, 255, 0.5)
),
 url('${Background}');
background-size: cover;
background-position: center;
min-height: 100vh;


`

export const Content = styled.div`

padding-left: 100px;
padding-bottom: 70px;

`