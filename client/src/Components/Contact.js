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
    <Wrapper>
        <form onSubmit={sendEmail}>
            <div>
                <Inputs type="text" className='form-control' placeholder='name' name='name' />
            </div>
            <div>
                <Inputs type="text" className='form-control' placeholder='email' name='email' />
            </div>
            <div>
                <Inputs type="text" className='form-control' placeholder='subject' name='subject' />
            </div>
            <div>
                <Inputs type="text" className='form-control' placeholder='Your Message' name='message' />
            </div>
            
            <div>
                <Button type="submit" value="send message"></Button>
            </div>

        </form>
    </Wrapper>
    )
}

const Wrapper = styled.div`
border-style: solid;
padding: 100px;
`

const Inputs = styled.input`
padding: 15px;
margin: 5px;
`

const Button = styled.input`
padding: 5px;

`



export default Contact