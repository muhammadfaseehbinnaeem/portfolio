import { Button, Card } from "react-bootstrap";

const Project = ({ project }) => {
    return (
        <Card className="p-3 rounded project-card">
            <Card.Img
                src={project.image}
                alt={project.name}
                variant="top"
                className="project-image"
            />
            <Card.Body>
                <Card.Title as="div" className="project-title">
                    <strong>{project.name}</strong>
                </Card.Title>
                <Button
                    variant="secondary"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-view btn-sm mt-1"
                >
                    View
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Project;