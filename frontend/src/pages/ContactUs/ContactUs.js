import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, Table, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import axios from 'axios';
function ContactUs() {

    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contact_no, setContact_no] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessages, setErrorMessages] = useState({});
    const [profileInfo, setProfileInfo] = useState([])

    const handleSubmit = () =>{

    }
  return (
    <div>
        <Container>
                <Row className='justify-content-md-center'>
                    <Col md={5}>
                            <h2>Contact Us Form</h2>

                            {/* {renderErrorMessage("uname")} */}
                            <Form onSubmit={handleSubmit}>

                                
                                

                                <Form.Group controlId='email'>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control
                                        required
                                        type='email'
                                        name='email'
                                        placeholder='Enter Email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId='contact_no'>
                                    <Form.Label>Phone no.</Form.Label>
                                    <Form.Control

                                        type='tel'
                                        name='contact_no'
                                        placeholder='Enter Phone number'
                                        value={contact_no}
                                        onChange={(e) => setContact_no(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId='message'>
                                    <Form.Label> Message </Form.Label>
                                    <Form.Control

                                        as="textarea" rows={5}
                                        placeholder='Message goes here'
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>

                                <Button type='submit' variant='primary'>
                                    Submit
                            </Button>

                            </Form>
                        </Col>

                </Row>
            </Container>
    </div>
  )
}

export default ContactUs