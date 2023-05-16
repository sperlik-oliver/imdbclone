import React from "react";
import getValue from "./getValue";
import styled from "@emotion/styled";
import { BACKGROUND } from "../../styled/colors";

type Props = {
    value: string,
    onChange: (value: string) => void;
    label?: string,
    placeholder?: string
    width?: number
}

const Input = ({ label, value, onChange, placeholder, width = 300 }: Props) => {
    return <>
      {label && <label>{label}</label>}
      <StyledInput
        value={value}
        onChange={(event) => onChange(getValue(event))}
        placeholder={placeholder}
        width={width}
      />
    </>
}

export default Input

type StyledProps = {
    width: number
}

const StyledInput = styled.input<StyledProps>`
background-color: ${BACKGROUND};
padding-top: 5px;
padding-bottom: 5px;
padding-left: 10px;
padding-right: 10px;
border: 1px solid grey;
border-radius: 5px;
color: white;
height: 30px;   
width: ${(props) => props.width}px;
`