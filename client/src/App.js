import styled from "styled-components";
import './App.css';
import {Helmet} from "react-helmet";
import Navbar from "./Components/Navbar";
import Name from "./Components/Name";
import AboutMe from "./Components/AboutMe";

const App = () => {
  

  return (
    <div>
      <Helmet>
        <style>{'body { background-color: #2F1633 }'}</style>
      </Helmet>
      <Navbar />
      <section className="sec-1">
        <div className="container">
          <Name />
        </div>
      </section>
      <section className="sec-2">
        <div className="container">
          <AboutMe />
        </div>
      </section>
      <section className="sec-3">
        <div className="container">
          <div>Skills</div>
        </div>
      </section>
      <section className="sec-4">
        <div className="container">
          <div>Projects</div>
        </div>
      </section>
      <section className="sec-5">
        <div className="container">
          <div>Contact</div>
        </div>
      </section>
  </div>

  )
}

export default App;
