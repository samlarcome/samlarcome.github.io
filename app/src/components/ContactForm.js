import React from "react"
import {useState} from 'react';
import {Row, Col, Container, Form, Button, Alert} from 'react-bootstrap';


export const ContactForm = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:5000/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code == 200) {
          setStatus({ succes: true, message: 'Message sent successfully'});
        } else {
          setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
        }
      };


    return (
        <section className="contact" id="connect">
        
            <Container id="contact-form-holder">
                <Form onSubmit={handleSubmit}>
                    <h2>Get in Touch</h2>
                    <Row className="mb-3  align-items-center">
                        {/* First name */}
                        <Form.Group as={Col} controlId="formFirstName" className="forminput">
                            <Form.Control type="text" value={formDetails.firstName} placeholder="First Name" onChange={e => onFormUpdate('firstName', e.target.value)} required/>
                        </Form.Group>

                        {/* Last Name */}
                        <Form.Group as={Col} controlId="formLastName">
                            <Form.Control type="text" value={formDetails.lastName} placeholder="Last Name" onChange={e => onFormUpdate('lastName', e.target.value)} />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        {/* Email address input */}
                        <Form.Group as={Col} controlId="formEmail">
                            <Form.Control type="email" value={formDetails.email} placeholder="Email Address" onChange={e => onFormUpdate('email', e.target.value)} required/>
                        </Form.Group>

                        {/* Phone num input */}
                        <Form.Group as={Col} controlId="formPhone">
                            <Form.Control type="phone" value={formDetails.phone} placeholder="Phone Num" onChange={e => onFormUpdate('phone', e.target.value)} />
                        </Form.Group>
                    </Row>

                    {/* Message input */}
                    <Form.Group className="mb-3" controlId="formMessage">
                        <Form.Control as="textarea" rows={6} value={formDetails.message} placeholder="Message" onChange={e => onFormUpdate('message', e.target.value)} required/>
                    </Form.Group>

                    <Button variant="light" type="submit" id="contact-submit-btn">
                        <span>
                        {buttonText}
                        </span>
                    </Button>
                    {
                        status.message &&
                        <Col>

                            <Alert key={status.success === false ? 'danger' : 'success'} variant={status.success === false ? 'danger' : 'success'}>
                                {status.success}
                                {status.message}
                            </Alert>

                        </Col>
                    }
                </Form>
            </Container>
        </section>
    )
}