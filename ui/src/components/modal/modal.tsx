import styled from '@emotion/styled'
import React from 'react'
import { Column, Row } from '../../styled/flex'
import Button from '../inputs/button'
import Page from '../../pages/page'

type Props = {
    open: boolean
    setOpen: (open: boolean) => void
    title: string
    children: React.ReactNode
    onOk?: () => void
}

const Modal = ({ open, setOpen, children, onOk, title}: Props) => {
    if (open) return <PageMask><Container>
        <h1>{title}</h1>
        <ContentContainer>
            {children}
        </ContentContainer>
        <Buttons>
            <Button label='Close' onClick={() => setOpen(false)} />
            { onOk && <Button label='Ok' onClick={() => onOk()} /> }
        </Buttons>
        </Container>
    </PageMask>
    return <></>
}

const ContentContainer = styled(Column)`
    height: 200px;
    overflow-y: scroll;
`

const Container = styled(Column)`
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    margin: auto;
    height: 300px;
    width: 20vw;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: black;
    z-index: 9999;
    border: 1px solid grey;
`

const PageMask = styled.div`
    position: fixed;
    background: rgba(0, 0, 0, 0.8);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
`

const Buttons = styled(Row)`
margin-top: auto;
`

export default Modal