import React, { Component } from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Resume from '../../Assets/pdf/K Jones Resume.pdf';

library.add(faEnvelope, faFileDownload, faGithub, faLinkedin);

class Footer extends Component {
  render() {
    return (
      <div class="footer bg-dark">
        <Container>
              <Row>
                  <Col xs={6} lg={3}>
                      <FontAwesomeIcon icon={["fas", "envelope"]} />
                      <a href= "mailto:jones.m.kasey@gmail.com" target="_blank" rel="noopener noreferrer">&nbsp;Email</a>
                  </Col>
                  <Col xs={6} lg={3}>
                      <FontAwesomeIcon icon={["fab", "linkedin"]} />
                      <a href= "https://www.linkedin.com/in/kasey-m-jones" target="_blank">&nbsp;LinkedIn</a>
                  </Col>
                  <Col xs={6} lg={3}>
                      <FontAwesomeIcon icon={["fab", "github"]} />
                      <a href="https://github.com/joneskm72" target="_blank">&nbsp;GitHub</a>
                  </Col>
                  <Col xs={6} lg={3}>
                      <FontAwesomeIcon icon={["fas", "file-download"]} />
                      <a href={Resume} target="_blank" download="K Jones Resume.pdf">&nbsp;Resume</a>
                  </Col>
              </Row>
          </Container>
      </div>
    );
  }
}

export default Footer;