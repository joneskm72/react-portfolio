import React, { Component } from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab)

class Footer extends Component {
  render() {
    return (
      <div class="footer bg-dark">
        <Container>
              <Row>
                  <Col xs={6} lg={3}>
                      <i class="fas fa-phone"></i>
                      &nbsp;828-406-5140
                  </Col>
                  <Col xs={6} lg={2}>
                      <i class="far fa-envelope"></i>
                      <a href= "mailto:jones.m.kasey@gmail.com">&nbsp;Email</a>
                  </Col>
                  <Col xs={6} lg={2}>
                      <i class="fab fa-linkedin"></i>
                      <a href= "https://www.linkedin.com/in/kasey-m-jones">&nbsp;LinkedIn</a>
                  </Col>
                  <Col xs={6} lg={2}>
                      <fab icon="github" />
                      <a href="https://github.com/joneskm72">&nbsp;GitHub</a>
                  </Col>
                  <Col xs={6} lg={2}>
                      <i class="fa fa-file-text"></i>
                      <a href="https://docs.google.com/document/d/1tyUOv-2P8FZdMmhxAmREY9vBbaZ82G2wYEOEoP-jOjI/edit?usp=sharing">&nbsp;Resume</a>
                  </Col>
              </Row>
          </Container>
      </div>
    );
  }
}

export default Footer;