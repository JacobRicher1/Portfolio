import React from 'react'
import styled from 'styled-components'
import { motion, useTransform, useScroll } from "framer-motion"
import "./AboutMe.css"

const AboutMe = () => {
    const { scrollYProgress } = useScroll();

    return (
    <Wrapper>
    <motion.div 
    className='Title'
    style={{
        opacity: scrollYProgress
    }}>About Me</motion.div>
    <Discription>Hey! I'm Jacob, building and creating have always been a passion of mine.{`\n`}
    So when I discovered the ability to create on the internet I immediately fell in love. I started coding in early 2019 and finished a coding bootcamp in the summer of 2022</Discription>
    </Wrapper>
    )
}

const Wrapper = styled.div`

`


const Discription = styled.p`
font-family: "Montserrat";
color: white;
font-size: 24px;
font-weight: 337;
position: relative;
left: 100px;
top: 150px;
width: fit-content;
background-color: #FA6970;
max-width: 700px;
padding: 40px;
`

export default AboutMe