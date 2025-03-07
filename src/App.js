import React, { useState, useEffect } from 'react';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import { Analytics } from "@vercel/analytics/react"
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);


return (
  <div className='app' id={`${theme}`}>
    <main>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <About />
      <Projects />
      <Skills />
    </main>
    <Footer />
  </div>
);
};

export default App;