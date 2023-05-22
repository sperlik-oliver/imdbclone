import styled from '@emotion/styled';
import React from 'react'
import { Link as ReactLink, useLocation } from 'react-router-dom';
import { HOVER, SELECTED } from '../../styled/colors';

type Props = {
    children: React.ReactNode;
    to: string;
}

const Link = ({ children, to }: Props) => {
    const location = useLocation()

    return <StyledLink path={location.pathname} to={to}>{children}</StyledLink>
}

const StyledLink = styled(ReactLink)<{ path: string, to: string }>`
    color: ${({ path, to }) => path === to ? SELECTED : 'white'} !important;
    text-decoration: none !important;
    font-weight: bold !important;
    &:hover {
        color: ${HOVER} !important;
    }
`



export default Link