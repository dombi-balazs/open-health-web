import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import About from "./About";
import SkinScreening from './SkinScreening';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
        
        <div className="content">
          <Routes>
            <Route path="/" element={<SkinScreening />} />
            <Route path="/about" element={<About />} />
            <Route path="/skinscreen" element={<SkinScreening />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;