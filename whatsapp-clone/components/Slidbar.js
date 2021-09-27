import React from 'react'
import styled from 'styled-components'

const Slidbar = () => {
    return (
        <Container>
            <h>This is slidbar</h>
            <Header/>
        </Container>
    )
}

export default Slidbar

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width:30vw;
    background-color:#3944F7;
    color:white
`;
const Header = styled.div`
    
`;