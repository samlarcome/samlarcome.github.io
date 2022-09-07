import React from "react";
import { Container, Row, Tab, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorsharp2 from '../assets/images/color-sharp2.png'
import projimg1 from '../assets/images/project-img1.png'
import projimg2 from '../assets/images/project-img2.png'
import projimg3 from '../assets/images/project-img3.png'

export const Projects = () => {
    const projects = [
        {
            title: "Intern Project",
            description: "",
            imgURL: projimg1
        },
        {
            title: "8 Puzzle Solver",
            description: "",
            imgURL: projimg2
        },
        {
            title: "Closest Pair of Points",
            description: "",
            imgURL: projimg3
        },
        {
            title: "Intern Project",
            description: "",
            imgURL: projimg1
        },
    ];


    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Temporary</p>
                        <Tab.Container id="projects-tab" defaultActiveKey="first">
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorsharp2}/>
        </section>
    )
}