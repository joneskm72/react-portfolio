import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

class Contact extends Component {
  render() {
    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFirst">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="first" placeholder="First Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLast">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="last" placeholder="Last Name" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group controlId="formGridEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control placeholder="Email" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group controlId="formGridMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control placeholder="Message" />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}

export default Contact;