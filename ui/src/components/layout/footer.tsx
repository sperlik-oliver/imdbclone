import styled from "@emotion/styled";
import React from "react";

const Footer = () => {
    return <Container>Bestmovie, Inc.</Container>
}

const Container = styled.div`
display: flex;
background-color: black;
height: 50px;
position: absolute;
bottom: 0px;
width: 100%;
border-top: 1px solid grey;
align-items: center;
justify-content: center;
font-weight: 200;
`

export default Footer