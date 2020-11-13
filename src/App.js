import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Project from './components/Project';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
