import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  DiJavascript1,
  DiReact,
  DiBootstrap,
  DiNodejs,
  DiMongodb,
  DiAndroid,
  DiApple,
  DiGit,
  DiCss3,
  DiDatabase,
  DiDigitalOcean,
  DiAws,
  DiCode,
  DiVisualstudio,
  DiGithubBadge
} from "react-icons/di";

import avatar from '../assets/avatar.svg';
import Particle from '../components/Particle';

const AboutScreen = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container className="body">
        <Row className="about">
          <Col md={7} style={{ justifyContent: "center" }}>
            <h1 className="about-heading">
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p style={{ textAlign: "justify" }}>
                    Hi, I am <span className="purple">Muhammad Faseeh Bin Naeem </span>
                    from <span className="purple"> Lahore, Pakistan.</span>
                    <br />
                    <br />
                    I am a Full Stack MERN Developer.
                    I have more than 3 years experience in
                    web development and android/iOS development.
                    I have worked on various web technologies including
                    both frontend and backend. 
                    {/* <br />
                    <br />
                    I am experience in
                    React JS, Redux Toolkit, React Native, React Bootstrap and CSS
                    on frontend stack and
                    Node JS and Express JS
                    on backend stack.
                    I am fluent in MongoDB and Mongoose on database side and
                    have expertise in developing Aggregation Pipelines.
                    I am efficient in using Git and GitHub for version control. */}
                    <br />
                    <br />
                    I am always eager to learn new web technologies.
                    I love to develop clean, efficient and scalable products.
                    <br />
                    <br />
                  </p>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5} className="avatar-container circular-image">
            <Tilt>
              <img
                src={avatar}
                alt="about"
                className="avatar-image img-fluid rounded-circle"
              />
            </Tilt>
          </Col>
        </Row>
        <Row className="skills">
          <h1 className="mb-5">
            Professional <strong className="purple">Skillset</strong>
          </h1>
          <Col xs={4} md={2} className="tech-icons">
            <DiReact />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiBootstrap />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiCss3 />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiNodejs />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiJavascript1 />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiMongodb />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiDatabase />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiAndroid />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiApple />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiGit />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiGithubBadge />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiCode />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiVisualstudio />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiAws />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiDigitalOcean />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default AboutScreen;