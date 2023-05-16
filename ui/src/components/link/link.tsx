import styled from '@emotion/styled';
import React from 'react'
import { useNavigate, Link as ReactLink } from 'react-router-dom';

type Props = {
    children: React.ReactNode;
    to: string;
}

const Link = ({ children, to }: Props) => {
    const navigate = useNavigate()
    return <StyledLink to={to}>{children}</StyledLink>
}

const StyledLink = styled(ReactLink)`
    color: white !important;
    text-decoration: none !important;
    font-weight: bold !important;
`



export default Link