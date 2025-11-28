import React from 'react';
import Hero from './components/Hero.jsx';
import Capabilities from './components/Capabilities.jsx';
import Process from './components/Process.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="app">
      <Hero />
      <Capabilities />
      <Process />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
