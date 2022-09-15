import React, {useState} from 'react'
import HeroSection from '../Components/HeroSection'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Contact from '../Components/Contact'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import Footer from '../Components/Footer'
import AboutMe from '../Components/AboutMe'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} isOpen={isOpen}/>
            <HeroSection />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
)
}

export default Home