import './App.css';
import React from 'react';
import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner';
import { Skills } from './components/Skills';
import {Projects} from './components/Projects'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContactForm } from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <ContactForm />
    </div>
  );
}

export default App;
