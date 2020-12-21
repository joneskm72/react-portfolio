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
              <p className='colP'>An aspiring Test Engineer who has experience as a Client Support Representative with a proven record of maintaining client loyalty and providing the highest level of customer experience. Passionate about helping people reach their goals and achieve their fullest potential.</p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default About;