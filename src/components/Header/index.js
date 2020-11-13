import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">Kasey Jones</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-links">
            {/* <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#my-portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact-me">Contact</Nav.Link> */}
            <div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="/"
                    className={
                      window.location.pathname === "/" || window.location.pathname === "/home"
                      ? "nav-link active"
                      : "nav-link"
                    }
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/my-portfolio"
                    className={window.location.pathname === "/my-portfolio" ? "nav-link active" : "nav-link"}
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/contact-me"
                    className={window.location.pathname === "/contact-me" ? "nav-link active" : "nav-link"}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;