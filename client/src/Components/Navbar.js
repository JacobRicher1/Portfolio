import React from 'react'
import styled from 'styled-components'



const Navbar = () => {


return (
    <Header>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"></link>
        <a href='#sec-1'>
            <Title>Home</Title>
        </a>
        <a href='#sec-2'>
            <Title>About</Title>
        </a>
        <a href='#sec-3'>
            <Title>Skills</Title>
        </a>
        <a href='#sec-4'>
            <Title>Projects</Title>
        </a>
        <a href='#sec-5'>
            <Title>Contact</Title>
        </a>
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
position: sticky;
top: 0;
    &:hover{
        color: #FD935E;
        cursor: pointer;
    }


`

export default Navbar