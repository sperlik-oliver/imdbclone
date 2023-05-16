import styled from "@emotion/styled";
import React, { useState } from "react";
import { Column, Row } from "../../styled/flex";
import Input from "../inputs/input";
import { useSearchParams } from 'react-router-dom';
import Link from "../link/link";



const Navbar = () => {
    const [_, setSearchParams] = useSearchParams();
    const [nameFilter, setNameFilter] = useState('')

    const onChangeNameFilter = (value: string) => {
        setSearchParams({['nameFilter']: value})
        setNameFilter(value) 
    }

    return <Container>
        <Side>
            <Item><Link to={''}>Home</Link></Item>
            <Item>
                <Input 
                    value={nameFilter}
                    onChange={onChangeNameFilter}
                    placeholder={'Search for movie name'}
                    width={700}
                />
            </Item>
        </Side>
        <Side>
            <Item><Link to={''}>Sign in</Link></Item>
        </Side>
            
            
        </Container>
}

const Side = styled(Row)`
gap: 20px;
`

const Item = styled.div`
display: flex;
height: full;
width: fit-content;
align-items: center;
justify-content: center;
`

const Container = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
height: 70px;
padding-left: 20px;  
padding-right: 20px;
width: full;
position: absolute:
top: 0;
border-bottom: 1px solid grey;
background-color: black;
`

const Left = styled.div`

`

export default Navbar