import { Container, Row, Col } from "react-bootstrap"
import React from "react"
import {ArrowRightCircle} from 'react-bootstrap-icons'
import HeaderImg from '../assets/images/header-img.svg'


export const Banner = () => {
    

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>{'Hi, I am Sam Larcome'}</h1>
                        <p>a third year cs student at the University of Connecticut</p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={HeaderImg} alt='Header Image'/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}