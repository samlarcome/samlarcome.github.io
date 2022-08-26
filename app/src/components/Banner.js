import { Container, Row, Col } from "react-bootstrap"
import React from "react"
import {ArrowRightCircle} from 'react-bootstrap-icons'
import HeaderImg from '../assets/images/header-img.svg'
import { useState, useEffect } from "react"

export const Banner = () => {
    

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{'Hi, I am Sam'}<span className="wrap">CS Student</span></h1>
                        <p>I am a third year cs student and UConn</p>
                        <button onClick={() => console.log('connect')}>Let's Connect<ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={HeaderImg} alt='Header Image'/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}