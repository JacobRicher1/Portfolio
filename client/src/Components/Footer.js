import React from 'react'
import styled from 'styled-components'

const Footer = () => {

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
  return (
    <FooterBanner><button onclick={topFunction} id="myBtn" title="Go to top">Top</button>
    </FooterBanner>
  )
}

const FooterBanner = styled.div`
    height: 100px;
    background-color: #594D42;
    color: white;
    text-align: center;   
    margin-top: auto;

`

export default Footer