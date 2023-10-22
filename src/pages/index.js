import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Container, Row, Col, } from 'react-bootstrap';
import { Card, CardBody, CardTitle, CardText, CardImg, } from 'reactstrap';
import Layout from "../components/layout"
import Seo from "../components/seo"
import '../styles/index.scss'

function Summary() {
  return (
    
    <Container fluid>
      <Row>
        <Col>
        <Card className="my-2" body color="dark" inverse style={{ width: '30rem', height: '30rem'}}>
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/900/180"
      style={{
        height: 290
      }}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Card Title
      </CardTitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <CardText>
        <small className="text-muted">
          Last updated 3 mins ago
        </small>
      </CardText>
    </CardBody>
  </Card>
        </Col>
        <Col>2 of 2</Col>
      </Row>
    </Container>
  );
}


const Suscription = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowModal(true);
    }, 7000);
    return () => clearTimeout(timeoutId);
  }, []);

  const handleCloseModal = () => setShowModal(false);

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Example Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCloseModal}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const IndexPage = () => (
  <Layout>
    <Seo title="Home" keywords={[`gatsby`, `application`, `react`]}/>
    <Container fluid>
      <Suscription />
      <Summary/>
    </Container>
      
      
  </Layout>
)

export default IndexPage