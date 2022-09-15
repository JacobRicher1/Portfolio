import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages';
import ProjectDisplay from './Pages/ProjectDisplay';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects/:id' element={<ProjectDisplay />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
