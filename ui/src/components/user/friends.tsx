import React from "react";
import { Friend } from "../../types";
import styled from "@emotion/styled";
import { Column, Row } from "../../styled/flex";
import FriendComponent from "./friend";

type Props = {
    friends: Friend[]
}

const Friends = ({ friends }: Props) => <Container>
        { friends && friends.length > 0 ? friends.map(({ username, toplist }) => <FriendComponent key={username} username={username} toplist={toplist} />) : <b>No friends found</b> }
    </Container>


const Container = styled(Column)`
gap: 10px;
height: 200px;
width: fit-content;
overflow-y: scroll;
`
    
export default Friends