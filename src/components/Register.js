import React, { useState } from "react";
import axios from "axios";
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';

const Register = () => {
    const [user, setUser] = useState({
        // User has name, email, and password
        name: "",
        email: "",
        password: ""
    })
    // function to call when user type in input
    const handleChange = e => {

    }

    // register finction that use axios to post data to db

    // return a div that cotain field for user to type in information
    return (
        
        <div>
        {/* use bootstrap registration template */ }
        <Container>
            <Row className="vh-100 d-flex justify-content-center align-items-center">
                <Col md={8} lg={6} xs={12}>
                    <Card className="px-4">
                        <Card.Body>
                            <div className="mb-3 mt-md-4">
                                <h2 className="fw-bold mb-2 text-center text-uppercase ">
                                    Logo
                                </h2>
                                <div className="mb-3">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="Name">
                                            <Form.Label className="text-center">Name</Form.Label>
                                            <Form.Control type="text" name="name" value={user.name} placeholder="Enter Name" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className="text-center">
                                                Email address
                                            </Form.Label>
                                            <Form.Control type="email" name="email" value={user.email} placeholder="Enter email" />
                                        </Form.Group>

                                        <Form.Group
                                            className="mb-3"
                                            controlId="formBasicPassword"
                                        >
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" name="password" value={user.password} placeholder="Password" />
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formBasicPassword"
                                        >
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control type="password" name="password" value={user.password} placeholder="Password" />
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formBasicCheckbox"
                                        ></Form.Group>
                                        <div className="d-grid">
                                            <Button variant="primary" type="submit">
                                                Create Account
                                            </Button>
                                        </div>
                                    </Form>
                                    <div className="mt-3">
                                        <p className="mb-0  text-center">
                                            Already have an account??{' '}
                                            <a href="{''}" className="text-primary fw-bold">
                                                Sign In
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
    );
}