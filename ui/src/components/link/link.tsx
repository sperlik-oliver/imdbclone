import styled from '@emotion/styled';
import React from 'react'
import { Link as ReactLink, useLocation } from 'react-router-dom';
import { HOVER, SELECTED } from '../../styled/colors';


type Props = {
    children: React.ReactNode;
    to: string;
    allowHighlight?: boolean
}

const ACCOUNT_ROUTES = ['/account', '/login', '/register']

const Link = ({ children, to, allowHighlight = true }: Props) => {
    const { pathname } = useLocation()

    const isHighlighted = () => {
        if (ACCOUNT_ROUTES.includes(to) && ACCOUNT_ROUTES.some(route => route === pathname)) return true
        if (pathname.includes('movie') && to.includes('movie')) return true
        if (pathname === to) return true
        return false
    }
    
    const ishighlighted = isHighlighted() && allowHighlight

    return <StyledLink ishighlighted={ishighlighted ? 'true' : 'false'} to={to}>{children}</StyledLink>
}

const StyledLink = styled(ReactLink)<{ ishighlighted: 'true' | 'false' }>`
    color: ${({ ishighlighted }) => ishighlighted === 'true' ? SELECTED : 'white'} !important;
    text-decoration: none !important;
    font-weight: bold !important;
    cursor: pointer; !important;
    &:hover {
        color: ${HOVER} !important;
    }
`



export default Link