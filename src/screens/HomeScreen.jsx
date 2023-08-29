import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import homeLogo from '../assets/home-main.svg';
import Particle from '../components/Particle';
import Type from '../components/Type';

const HomeScreen = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content body">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> MUHAMMAD FASEEH BIN NAEEM </strong>
              </h1>
              <div className="typewriter">
                <Type />
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default HomeScreen;