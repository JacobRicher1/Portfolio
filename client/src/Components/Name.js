import React from 'react'
import styled from 'styled-components'
import {AiOutlineArrowRight} from "react-icons/ai"

const Name = () => {
return (
    <>
    <FullName>Jacob Richer</FullName>
    <JobName>Fullstack Developer</JobName>
    <ViewWorkBtn>View my work < AiOutlineArrowRight/></ViewWorkBtn>
    </>

)
}


const ViewWorkBtn = styled.button`
    background-color: #261E17;
    border-style: solid;
    border-color: white;
    color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: "Montserrat";
  
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
const FullName = styled.div`
font-family: "Montserrat";
color: #F2DCC2;
font-size: 65px;
font-weight: 337;
position: relative;
right: 400px;
width: fit-content;
bottom: 150px;
transition: width 2s;


`
export default Name