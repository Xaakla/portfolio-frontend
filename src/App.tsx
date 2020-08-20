import React from 'react';
import './App.scss';
import './scrollbar.scss';

import Navbar from './components/Navbar';
import Initial from './blocks/Inicial';
import Projects from './blocks/Projects';
import Skills from './blocks/Skills';
import ContactMe from './blocks/ContactMe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Initial />
      <Projects />
      <Skills />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
