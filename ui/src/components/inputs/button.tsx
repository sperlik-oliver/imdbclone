import styled from "@emotion/styled";
import React from "react";
import { HOVER } from "../../styled/colors";

type Props = {
    label: string
    onClick: () => void;
}

const Button = ({ label, onClick }: Props) => 
    <Container onClick={onClick}>
        {label}
    </Container>


const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 10px;
width: 80px;
padding: 10px;
margin: 10px;
border: 1px solid grey;
background-color: black;
color: white;
&:hover {
    color: ${HOVER}
}
`

export default Button