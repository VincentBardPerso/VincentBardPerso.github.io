import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Projects from './views/Projects';
import Contact from './views/Contact';
import Skillset from './views/Skillset';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Skillset" element={<Skillset />} />
      </Routes>
    </Router>
  );
}

export default App;
