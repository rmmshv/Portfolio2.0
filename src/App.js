import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import { Analytics } from "@vercel/analytics/react";
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('dark');

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
    <Analytics />
  </div>
);
};

export default App;