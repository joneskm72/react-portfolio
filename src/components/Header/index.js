import React, { Component } from 'react';
import Contact from '../../pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Kasey Jones</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="../../pages/Portfolio">Portfolio</Nav.Link>
            <Nav.Link href="../../pages/Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;