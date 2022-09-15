import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { Footer, SocialMedia, Title, Icons } from './FooterElements'

const index = () => {
  return (
    <Footer>
        <Icons>
        <a href='https://github.com/JacobRicher1'> 
        <SocialMedia>
            <FaGithub />
        </SocialMedia>
        </a>
        <a href='https://www.linkedin.com/in/jacob-richer-9790b4247/'>
        <SocialMedia>
            <FaLinkedin />
        </SocialMedia>
        </a>

        </Icons>

    </Footer>
    
  )
}

export default index