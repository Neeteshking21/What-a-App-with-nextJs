import React from 'react'
import styled from 'styled-components'
import { Avatar, IconButton, Button } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import SearchIcon from '@mui/icons-material/Search';


const Slidbar = () => {
    return (
        <Container>
            
            <Header>
                <UserAvatar/>
                <IconsContainer>
                    <IconButton style={{"color":"black"}}>
                        <ChatIcon />
                        <MoreVertIcon/>
                    </IconButton>
                </IconsContainer>
            </Header>

            <Search>
                <SearchIcon/>
                <SearchInput placeholder="Search in chats"/>
            </Search>

            <SlidbarButton>Start a new Chat</SlidbarButton>

        </Container> 
    )
}

export default Slidbar

const Container = styled.div`
    /* display: flex;
    flex-direction: row;
    height: 100vh;
    /* width:30vw; */
    /* background-color:#3944F7; */
    /* border:4px solid black; */ 
    /* color:white */
`

const Header = styled.div`
    display:flex;
    position:sticky;
    flex-wrap:wrap;
    top:0;
    background-color:#3944F7;
    justify-content: space-between;
    z-index:1; 
    /* align-items:center; */
    padding:3px;
`;

const UserAvatar = styled(Avatar)`

`;

const IconsContainer = styled.div`
    
`;

const Search = styled.div`
    display:flex;
    align-items: center;
    padding:20px;
    border-radius:2px;
`;

const SearchInput = styled.input`
    outline-width:0;
    border:none;
    flex:1

`
const SlidbarButton = styled(Button)`
    width:100%;
    border-top:1px solid whitesmoke;
    border-bottom:1px solid whitesmoke;
`