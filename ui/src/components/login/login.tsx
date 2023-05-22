import styled from "@emotion/styled";
import React, { useContext, useState } from "react";
import Input from "../inputs/input";
import { Column, Row } from "../../styled/flex";
import Link from "../link/link";
import Button from "../inputs/button";
import { UserContext } from "../user/user.context";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [user, setUser] = useContext(UserContext)

    return <LoginContainer>
        <Input value={email} onChange={(email: string) => setEmail(email)} label="Email" />
        <Input value={password} onChange={(password: string) => setPassword(password)} label="Password"/>
        <Button label="Sign In" onClick={() => {}}/>
        <Row>
            <span>Don't have an account? {<Link to="/register">Register</Link>}</span>
        </Row>
        
        
        
    </LoginContainer>
}

export const LoginContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 80%;
gap: 20px;
align-items: center;
justify-content: center;
padding: 20px;
`



export default Login