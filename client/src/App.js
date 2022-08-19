import styled from "styled-components";
import './App.css';
import {Helmet} from "react-helmet";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div>
      <Helmet>
        <style>{'body { background-color: #2F1633 }'}</style>
      </Helmet>
      <Navbar />
</div>
  )
}

export default App;
