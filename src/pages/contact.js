import * as React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import NavBarFinal from "../components/navbar";
import Seo from "../components/seo";

function Component() {
  return <h5>Contact Me</h5>;
}

function Summary() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica para enviar el formulario
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Write your message" required />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col>Publicity</Col>
      </Row>
    </Container>
  );
}

const ContactMe = () => (
  <>
    <NavBarFinal />
    <Component />
    <Seo title="Contact me" keywords={[`gatsby`, `application`, `react`]} />
    <Container fluid>
      <Summary />
    </Container>
  </>
);

export default ContactMe;
