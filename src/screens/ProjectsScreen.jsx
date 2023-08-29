import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import projects from '../assets/projects_data/projects';
import Particle from '../components/Particle';
import Project from '../components/Project';

const ProjectsScreen = () => {
    return (
        <Container fluid className="projects-section">
            <Particle />
            <Container className="body">
                <Row className="projects">
                    {
                        projects.map((project) => (
                            <Col key={project.id} xs={12} md={6} lg={4} xl={4}>
                                <Project project={project} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </Container>
    );
};

export default ProjectsScreen;