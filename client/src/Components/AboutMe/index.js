import React from 'react'
import styled from 'styled-components'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const index = () => {
return (
    <ContainerAboutPage id="about">
        <TextZone>
            <h1>About Me</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales nec leo at pretium. 
                Nullam tincidunt ipsum nec leo consequat elementum. 
                Duis nec ex vitae tortor tincidunt consequat sed quis ipsum. Sed tincidunt, 
                enim non rhoncus luctus, nulla diam porta ligula, dignissim molestie felis urna non tortor.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales nec leo at pretium. 
                Nullam tincidunt ipsum nec leo consequat elementum. 
                Duis nec ex vitae tortor tincidunt consequat sed quis ipsum. Sed tincidunt, 
                enim non rhoncus luctus, nulla diam porta ligula, dignissim molestie felis urna non tortor.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales nec leo at pretium. 
                Nullam tincidunt ipsum nec leo consequat elementum. 
                Duis nec ex vitae tortor tincidunt consequat sed quis ipsum. Sed tincidunt, 
                enim non rhoncus luctus, nulla diam porta ligula, dignissim molestie felis urna non tortor.</p>

        </TextZone>

    </ContainerAboutPage>
)
}
const TextZone = styled.div`
    position: absolute;
    top: 50%;
    width: 35%;
    vertical-align: middle;
    display: inline;
    display: table-cell;
    
`
const ContainerAboutPage = styled.div`
    `

export default index