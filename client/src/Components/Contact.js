import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
    
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_lh66qvf', 'template_via9l7l', e.target, 'w5RCnI8taRa54retJ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
    return (
    <>
    <ContactTitle>Contact Me</ContactTitle>
    <Wrapper>
        <form onSubmit={sendEmail}>
            <NameSection>
                <NameTitle>NAME</NameTitle>
                <NameInput type="text" className='form-control' name='name' />
            </NameSection>
            <EmailSection>
                <EmailTitle>EMAIL</EmailTitle>
                <EmailInput type="text" className='form-control' name='email' />
            </EmailSection>
            <MessageSection>
                <MessageTitle>MESSAGE</MessageTitle>
                <MessageInput type="text" className='form-control' name='message' />
            </MessageSection>
            <Button type="submit" value="send message">

            </Button>




        </form>
    </Wrapper>
    </>
    )
}


const EmailSection = styled.div`
margin: 12px;
`

const NameSection = styled.div`
margin: 12px;
`

const MessageSection = styled.div`
margin: 12px;
`

const MessageTitle = styled.div`
color: white;
font-family: "Montserrat", sans-serif;
font-size: 20px;
font-weight: bold;
margin-bottom: 5px;
`
const EmailTitle = styled.div`
color: white;
font-family: "Montserrat", sans-serif;
font-size: 20px;
font-weight: bold;
margin-bottom: 5px;
`
const NameTitle = styled.div`
color: white;
font-family: "Montserrat", sans-serif;
font-size: 20px;
font-weight: bold;
margin-bottom: 5px;
`
const ContactTitle = styled.div`
position: relative;
right: 400px;
color: #f64c72;
font-family: "Montserrat", sans-serif;
font-size: 40px;
font-weight: bold;
`

const Wrapper = styled.div`
width: fit-content;
position: relative;
left: 250px;
`

const NameInput = styled.input`
width: 550px;
height: 38px;
border-radius: 5px;
border-style: solid;
padding-left: 4px;
`
const EmailInput = styled.input`
width: 550px;
height: 38px;
border-radius: 5px;
border-style: solid;
padding-left: 4px;
`
const MessageInput = styled.input`
width: 550px;
height: 100px;
border-radius: 5px;
border-style: solid;
`

const Button = styled.input`

    width: 150px;
    height: 60px;
    border: none;
    outline: none;
    background: #2f2f2f;
    color: #fff;
    font-size: 18px;
    border-radius: 40px;
    text-align: center;
    box-shadow: 0 6px 20px -5px
    rgba(0,0,0,0.4);
    position: relative;
    overflow: hidden;
    cursor: pointer;
    left: 10px;
`



export default Contact