import React from 'react'
import { Comment as CommentType } from '../../types'
import styled from '@emotion/styled'
import { Column, Row } from '../../styled/flex'
import { DateTime } from 'luxon'

type Props = {
    comment: CommentType
}

const Comment = ({ comment }: Props) => {
    const { username, date, text } = comment
    return <Container>
        <Row>
            <span>{username}</span> | <span>{DateTime.fromISO(date).toFormat('yyyy LLL dd')}</span>
        </Row>
        <TextContainer>
            {text}
        </TextContainer>
    </Container>
}

const Container = styled(Column)`
    gap: 20px;
`

const TextContainer = styled.div`
    width: 400px;
    height: 100%;
    overflow-y: scroll;
`

export default Comment