import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Project from './components/Project';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/home" component={About} />
          <Route exact path="/react-portfolio" component={Portfolio} />
          <Route exact path="/contact-me" component={Contact} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
