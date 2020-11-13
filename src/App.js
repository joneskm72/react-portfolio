import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Project from './components/Project';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Contact />
    </div>
  );
}

export default App;
