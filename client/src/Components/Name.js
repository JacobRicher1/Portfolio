import React from 'react'
import styled from 'styled-components'
import {AiOutlineArrowRight} from "react-icons/ai"
import { AiOutlineArrowDown } from 'react-icons/ai'
import { motion, transition } from "framer-motion"

import "./Name.css"

const containter = {
    show: {
        transition: {
            staggerChildren: 0.35,
        },
    },
};

const item = {
    hidden: {
        opacity: 0,
        y: 200
    },
};

const Name = () => {
return (
    <>
    <motion.div
        initial={{ opacity: 0 }}
    className='fullName'
    animate={{
        scale: 1.5,
        opacity: 1.0,
        
        
        transition:{
            duration: 1,
            

        },
    }}>Jacob Richer</motion.div>
    <JobName>Fullstack Developer</JobName>
    <motion.button
    className='viewAbout'
    whileHover={{scale: 1.1}}
    whileTap={{scale: .9}}
    >
        <span className='right'>View my work <RightIcon>< AiOutlineArrowRight/></RightIcon></span>
        <span className='down'>View my work <DownIcon>< AiOutlineArrowDown/></DownIcon></span>
        
        </motion.button>
    </>

)
}
const RightIcon = styled.span`
position: relative;
top: 3px;
left: 2px;
`
const DownIcon = styled.span`
position: relative;
top: 3px;
left: 2px;
`
const JobName = styled.div`
font-family: "Montserrat";
color: #F2DCC2;
font-size: 24px;
font-weight: 337;
position: relative;
right: 400px;

bottom: 100px;
width: fit-content;
`

export default Name