import styled from "@emotion/styled";
import React from "react";

type Props = {
    children: React.ReactNode
    heading?: string
}

const Page = ({ children, heading }: Props) => 
<Container>
    { heading && <Heading>{heading}</Heading> }
    {children}
</Container>


const Heading = styled.div`
font-size: 2em;
margin: 40px;
`

const Container = styled.div`
display: flex;
width: 100%;
height: 100%;
`   

export default Page