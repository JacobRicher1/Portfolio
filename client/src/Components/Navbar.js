import React from 'react'
import styled from 'styled-components'  



const Navbar = () => {
return (
    <Header>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"></link>
        <div>
        <div>
            <Title>Home</Title>
            <Title>About Me</Title>
            <Title>Skills</Title>
            <Title>Projects</Title>
            <Title>Contact</Title>
        </div>
        </div>
    </Header>
)
}


const Header = styled.div`
display: flexbox;
padding: 2px;
position: sticky;
top: 0;
z-index: 1;
`

const Title = styled.div`
color: #F2DCC2;
font-weight: bold;
font-family: "Montserrat", sans-serif;
padding: 5px;
font-size: 22px;
margin-left: 15px;
margin-top: 5px;
display: inline-block;
    &:hover{
        color: #D9BEA7;
        cursor: pointer;
    }


`

export default Navbar