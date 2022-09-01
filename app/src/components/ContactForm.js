import React from "react"
import contactImage from '../assets/images/contact-img.svg'

export const ContactForm = () => {
    const fromInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(fromInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = () => {
        
    }

    return (
        <section>
            <Container>
                <Row className = 'align-items-center'>
                    <Col md={6}>
                        <img src={contactImage} />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={e => onFormUpdate('firstName', e.target.value)}></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={e => onFormUpdate('lastName', e.target.value)}></input>
                                </Col>

                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.email} placeholder="Email Address" onChange={e => onFormUpdate('email', e.target.value)}></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.phone} placeholder="Phone Num" onChange={e => onFormUpdate('phone', e.target.value)}></input>
                                </Col>
                                <Col>
                                    <textarea row="6" value={formDetails.n=message} placeholder="Message" onChange={e => onFormUpdate('message', e.target.value)}></textarea>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}