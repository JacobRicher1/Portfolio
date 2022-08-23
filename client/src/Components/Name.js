import React from 'react'
import styled from 'styled-components'

const Name = () => {
return (
    <>
    <FullName>Jacob Richer</FullName>
    <JobName>Fullstack Developer</JobName>
    </>

)
}
const Wrapper = styled.div`
background-color: #e354b1;
`

const JobName = styled.div`
font-family: "Montserrat";
color: white;
font-size: 24px;
font-weight: 337;
position: relative;
left: 100px;
top: 150px;
width: fit-content;
`
const FullName = styled.div`
font-family: "Montserrat";
color: white;
font-size: 55px;
font-weight: 337;
position: relative;
left: 100px;
top: 150px;
width: fit-content;
`
export default Name