import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

class Contact extends Component {
  render() {
    return (
      <Form>
        <h1>Contact</h1>
        <Form.Row className='formRow'>
          <Form.Group className='formGroup col-md-3' as={Col} controlId="formGridFirst">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="first" placeholder="First Name" />
          </Form.Group>

          <Form.Group className='formGroup col-md-3' as={Col} controlId="formGridLast">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="last" placeholder="Last Name" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group className='formGroup col-md-3' controlId="formGridEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control placeholder="Email" />
          </Form.Group>

          <Form.Group className='formGroup col-md-3' controlId="formGridCompany">
            <Form.Label>Company</Form.Label>
            <Form.Control placeholder="Company" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group className='formGroup col-md-6' controlId="formGridMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control placeholder="Message" />
          </Form.Group>
        </Form.Row>

        <Button className='formButton' variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}

export default Contact;