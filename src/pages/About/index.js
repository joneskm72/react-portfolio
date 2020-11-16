import React, { Component } from 'react';
import Profile from '../../Assets/Images/picture.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class About extends Component {
  render() {
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>About Me</h1>
        <Container>
          <Row>
            <Col xs={8} md={4} style={{ flexDirection: 'column', margin: 'auto', alignItems: 'left', justifyContent: 'left' }} >
              <Image src={ Profile } />
            </Col>
            <Col xs={8} md={4} style={{ flexDirection: 'column', margin: 'auto', alignItems: 'right', justifyContent: 'right' }} >
              <p style={{ textAlign: 'center' }}>An aspiring Test Engineer who has experience as a Client Support Representative with a proven record of maintaining client loyalty and providing the highest level of customer experience. Passionate about helping people reach their goals and achieve their fullest potential.</p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default About;