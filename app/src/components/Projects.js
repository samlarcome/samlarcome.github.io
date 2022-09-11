import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorsharp2 from '../assets/images/color-sharp2.png'


export const Projects = () => {
    const projects = [
        {
            title: "Intern Project",
            description: "A web app to automate manual process of sourcing new locum tenen providers, improving efficiency by 90%",
            iconURLS: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
            ],
            projectlink: '',
            repo: ''
        },
        {
            title: "8 Puzzle Solver",
            description: "A program to solve the 8 puzzle problem using a modified BFS graph algorithm",
            iconURLS: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            ],
            projectlink: 'https://github.com/samlarcome/School-Projects/tree/main/8-Puzzle',
            repo: 'School-Projects/8-Puzzle'
        },
        {
            title: "Closest Pair of Points",
            description: "Divide and conquer algorithm to find the closest pair of n points in a two-dimensional plane",
            iconURLS: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            ],
            projectlink: 'https://github.com/samlarcome/School-Projects/tree/main/Closest-Points',
            repo: 'School-Projects/Closest-Points'
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p> </p>
                        <Row xs={1} md={2} className="g-4">
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
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorsharp2}/>
        </section>
    )
}