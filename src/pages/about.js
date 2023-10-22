import * as React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Layout from "../components/layout"
import Seo from "../components/seo"


function Component () {
  return "Hello world"
}

function Summary() {
  return (
    <Container>
      <Row>
        <Col>hola</Col>
        <Col>2 of 2</Col>
      </Row>
    </Container>
  );
}


const AboutMe = () => (
  <Layout>
    <Component/>
    <Seo title="About me" keywords={[`gatsby`, `application`, `react`]}/>
    <Container fluid>
      <Summary/>
      <h1>Hello World</h1>
    </Container>

      
  </Layout>
)

export default AboutMe