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
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <ContactForm />
    </div>
  );
}

export default App;
