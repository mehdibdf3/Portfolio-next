"use client";
import React, { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import { UserContext } from '../../UserContext';

function Login() {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const authenticatedUser = {
      firstName: 'John',
      lastName: 'Doe',
      email: email,
    };
    setUser(authenticatedUser);
    router.push('/');
  };

  const handleSignUp = () => {
    router.push('/signup');
  };

  const formGroupStyle = {
    marginBottom: "20px",
  };

  const labelStyle = {
    color: "white",
    fontSize: "1.2em",
  };

  const inputStyle = {
    borderRadius: "5px",
    padding: "10px",
    backgroundColor: "#444",
    color: "white",
    border: "1px solid #555",
    marginBottom: "10px",
  };

  const buttonStyle = {
    display: "block",
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "white",
    fontSize: "1.2em",
    border: "none",
    cursor: "pointer",
    marginTop: "20px",
  };

  return (
    <div className="main-container" style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <Particle />
      <Container className="login-section center-text">
        <h1 style={{ color: "white", marginBottom: "30px" }}>Login</h1>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail" style={formGroupStyle}>
                <Form.Label style={labelStyle}>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={inputStyle}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" style={formGroupStyle}>
                <Form.Label style={labelStyle}>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={inputStyle}
                />
              </Form.Group>

              <Row>
                <Col>
                  <Button variant="primary" type="submit" style={buttonStyle}>
                    Login
                  </Button>
                </Col>
                <Col>
                  <Button variant="secondary" onClick={handleSignUp} style={buttonStyle}>
                    Sign Up
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
