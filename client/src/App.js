import styled from "styled-components";
import './App.css';
import {Helmet} from "react-helmet";
import Navbar from "./Components/Navbar";
import Name from "./Components/Name";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import { useRef } from "react"
import { BrowserRouter as Router } from "react-router-dom";


const App = () => { 

  return (
    <Router>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"></link>
      <Helmet>
        <style>{'body { background-color: #261E17 }'}</style>
      </Helmet>
      <Navbar />
      <section className="Name">
        <div className="container">
          <Name />
        </div>
      </section>
      <section className="AboutMe">
        <div className="container">
          <AboutMe />
        </div>
      </section>
      <section className="Skills">
        <div className="container">
          <Skills />
        </div>
      </section>
      <section className="Projects" >
        <div className="container">
          <Projects />
        </div>
      </section>
      <section className="Contact">
        <div className="container">
          <Contact />
          <Footer />
        </div>
      </section>

      
  </Router>

  )
}

export default App;
