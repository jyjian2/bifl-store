import React, { useState } from "react";
import axios from "axios";
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";

const SignIn = () => {
    const [user, setUser] = useState({
        // User has name, email, and password
        email: "",
        password: ""
    })

    // function to call when user type in input
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    // Signin function that use axios to post data to db
    const signin = () => {
        const { email, password } = user
        if (email && password) {
            axios.post("http://localhost:3001/api/login", user)
                .then(res => console.log(res))
        } else {
            alert("Invalid Input")
        }
    }

    // return a div that cotain field for user to type in information
    return (

        <div>
            {/* use bootstrap login template */}
            <Container>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <Card className="px-4">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h2 className="fw-bold mb-2 text-center text-uppercase ">
                                        Logo
                                    </h2>
                                    <div className="mb-3">
                                        <Form>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="text-center">
                                                    Email
                                                </Form.Label>
                                                <Form.Control type="email" name="email" value={user.email} onChange={handleChange} placeholder="Enter email" />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicPassword"
                                            >
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" />
                                            </Form.Group>
                                            <div className="d-grid">
                                                <Button variant="primary" type="submit" onClick={signin}>
                                                    Sign In
                                                </Button>
                                            </div>
                                        </Form>
                                        <div className="mt-3">
                                            <p className="mb-0  text-center">
                                                Doesn't have an account?{' '}
                                                <Link to={'/account/registry'}>
                                                    <a href="{''}" className="text-primary fw-bold">
                                                        Create One
                                                    </a>
                                                </Link>

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

export default SignIn