import React from "react";
import {Col, Card, Button} from "react-bootstrap";

export const ProjectCard = ({title, description, iconURLS, projectlink, repo}) => {
    return (

        <Col>
            <Card>
                {/* <Card.Img variant="top" src={imgURL} /> */}
                <Card.Body>
                    <Card.Title className="card-title" >{title}</Card.Title>
                    <Card.Text className="card-description">
                        {description}
                    </Card.Text>
                    <Card.Text className={projectlink === '' ? 'empty-project-link-holder' : 'project-link-holder'}>
                        
                        <Button variant="dark" href={projectlink} target="_blank">
                            <i class="devicon-github-original projects-gh-icon"></i>
                            {repo}
                        </Button>

                    </Card.Text>
                </Card.Body>
                <Card.Footer className="card-footer">
                    {
                        iconURLS.map((project, index) => {
                            return (
                                <img src={project} className="project-icons"/>
                            )
                        })
                    }
                </Card.Footer>
            </Card>
        </Col>
    )
}