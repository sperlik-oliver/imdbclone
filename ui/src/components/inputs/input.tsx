import React from "react";
import getValue from "./getValue";
import styled from "@emotion/styled";
import { BACKGROUND } from "../../styled/colors";

type Props = {
    value: string,
    onChange: (value: string) => void;
    label?: string,
    placeholder?: string
    width?: string
    height?: string
    ['min-height']?: string
    type?: 'password' | 'email' | 'text' | 'number'
}

const Input = ({ label, value, onChange, placeholder, width = '300px', height='20px', type = 'text', 'min-height': minHeight = '20px' }: Props) => {
    return <>
      {label && <label>{label}</label>}
      <StyledInput
        type={type}
        value={value}
        onChange={(event) => onChange(getValue(event))}
        placeholder={placeholder}
        width={width}
        height={height}
        min-height={minHeight}
      />
    </>
}

export default Input

type StyledProps = {
    width: string
    ['min-height']: string
    height: string
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
width: ${(props) => props.width};
height: ${(props) => props.height};
min-height: ${(props) => props["min-height"]}
`