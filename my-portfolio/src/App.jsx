import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;