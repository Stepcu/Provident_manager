import * as React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import NavBarFinal from "../components/navbar";
import Seo from "../components/seo";

function Component() {
  return <h2>About Me</h2>;
}

function Summary() {
  return (
    <Container>
      <Row>
        <Col>
          <p>
            Soy un apasionado por las finanzas y estoy emocionado de compartir mi conocimiento
            contigo a través de este blog. Mi objetivo es proporcionar información valiosa
            que te ayude a tomar decisiones financieras informadas y alcanzar tus metas.
          </p>
          <p>
            En mi tiempo libre, disfruto explorar nuevas oportunidades de inversión, analizar
            tendencias del mercado y aprender sobre estrategias financieras innovadoras.
            ¡Gracias por unirte a mí en este viaje financiero!
          </p>
          {/* Agrega más líneas según sea necesario */}
        </Col>
        <Col>Publicity</Col>
      </Row>
    </Container>
  );
}

const AboutMe = () => (
  <><NavBarFinal>
  </NavBarFinal><Component /><Seo title="About me" keywords={[`gatsby`, `application`, `react`]} /><Container fluid>
      <Summary />
    </Container></>
);

export default AboutMe;
