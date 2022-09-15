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
        <ContactContainer id='contact'>
            <ContactWrapper>
                <ContactTitle>Contact
                </ContactTitle>
                <form onSubmit={sendEmail}>
                    <NameSection>
                        
                        <NameInput type="text" className='form-control' name='name' placeholder='Name' />
                    </NameSection>
                    <EmailSection>
                        
                        <EmailInput type="text" className='form-control' name='email' placeholder='Email' />
                    </EmailSection>
                    <MessageSection>
                    
                        <MessageInput type="text" className='form-control' name='message' placeholder='Message'/>
                    </MessageSection>
                    <Button type="submit" value="send message">
                    </Button>
            </form>
        </ContactWrapper>
    </ContactContainer>
    )
}

const ContactTitle = styled.div`
    color: #01bf71;
    font-size: 35px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    display: flex;
    align-content: center;
    position: relative;
    top: 72px;
    left: 100px;

`

const ContactContainer = styled.div`
    color: #fff;
    background: '#2f2f2f';

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`
const ContactWrapper = styled.div`
display: grid;
    z-index: 1;
    height: 500px;
    width: 100%;
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    align-items: center;
    background-color: #2f2f2f;
`
const EmailSection = styled.div`
margin: 12px;
`

const NameSection = styled.div`
margin: 12px;
`

const MessageSection = styled.div`
margin: 12px;
`

const Wrapper = styled.div`
width: fit-content;
position: relative;
left: 250px;
`

const NameInput = styled.input`
width: 400px;
height: 38px;

border-style: solid;
padding-left: 8px;
background-color: #222222;
color: white;
`
const EmailInput = styled.input`
width: 400px;
height: 38px;

border-style: solid;
padding-left: 8px;
background-color: #222222;
color: white;
`
const MessageInput = styled.input`
width: 400px;
height: 100px;

border-style: solid;
padding-bottom: 60px;
padding-left: 8px;
background-color: #222222;
color: white;
`

const Button = styled.input`

    width: 150px;
    height: 55px;
    border-color: white;
    color: white;
    outline: none;
    background: #2f2f2f;
    color: #fff;
    font-size: 15px;
    text-align: center;
    box-shadow: 0 6px 20px -5px
    rgba(0,0,0,0.4);
    position: relative;
    overflow: hidden;
    cursor: pointer;
    left: 260px;
`



export default Contact