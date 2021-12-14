import React, { Component } from 'react';
import Profile from '../../Assets/Images/picture.png';
import Keyboard2 from '../../Assets/Images/keyboard2.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './style.css';

class About extends Component {
  render() {
    return (
      <div className='aboutBackground' style={{backgroundImage: `url(${Keyboard2})`}}>
        <h1 className='aboutHeader'>About Me</h1>
        <Container>
          <Row>
            <Col className='aboutCol1' xs={12} md={3}>
              <Image className='profileImage' src={ Profile } />
            </Col>
          </Row>
          <Row>
            <Col className='aboutCol2' xs={12} md={12}>
              <p className='colP'>A detail-oriented, results-driven manual test engineer with experience in all phases of STLC and an understanding of SDLC. Knowledgeable in creating and executing test cases and plans to support the development and release of applications in an Agile/SCRUM environment.</p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default About;