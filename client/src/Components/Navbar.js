import React from 'react'
import styled from 'styled-components'
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"></link>


const Navbar = () => {
return (
    <Header>
            <Title>Home</Title>
            <Title>About</Title>
            <Title>Skills</Title>
            <Title>Projects</Title>
            <Title>Contact</Title>
    </Header>
)
}


const Header = styled.div`
display: flexbox;
border-bottom: 5px solid #E36B54;
padding: 2px;
`

const Title = styled.div`
color: #E36B54;
font-family: "Montserrat", sans-serif;
font-size: 32px;
margin-left: 15px;
margin-right: 15px;
margin-top: 5px;
    &:hover{
        color: #FD935E;
    }


`

export default Navbar