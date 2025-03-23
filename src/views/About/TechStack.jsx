import React from 'react';
import TechCard from './TechCard';
import { Col, Row } from 'react-bootstrap';
import { SiPostgresql } from 'react-icons/si';
import { DiJavascript1, DiReact, DiCss3, DiBootstrap, DiMaterializecss, DiNodejs, DiDatabase, DiMongodb, DiMysql, DiGit, DiCode } from 'react-icons/di';

const Techstack = () => {
  return (
    <Row className='stack'>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='JavaScript' techIcon={<DiJavascript1 />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='React.js' techIcon={<DiReact />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='CSS' techIcon={<DiCss3 />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='Bootstrap' techIcon={<DiBootstrap />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='Material UI' techIcon={<DiMaterializecss />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='Node.js' techIcon={<DiNodejs />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='Database' techIcon={<DiDatabase />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='MongoDB' techIcon={<DiMongodb />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='MySQL' techIcon={<DiMysql />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='PostgreSQL' techIcon={<SiPostgresql />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='Git' techIcon={<DiGit />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='Code' techIcon={<DiCode />} />
      </Col>
    </Row>
  );
};

export default Techstack;