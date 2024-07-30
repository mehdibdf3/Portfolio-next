"use client";
import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Particle from "../Particle";

function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      emailjs.sendForm('service_xnbb7cl', 'template_7d34wes', form, 'g8fwVayTSqAVaVavs')
        .then((result) => {
          toast.success("Message sent successfully!");
          setValidated(false);
          form.reset();
        }, (error) => {
          toast.error("Failed to send message. Please try again.");
        });
      event.preventDefault();
    }

    setValidated(true);
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

  const textAreaStyle = {
    borderRadius: "5px",
    padding: "10px",
    backgroundColor: "#444",
    color: "white",
    border: "1px solid #555",
    marginBottom: "10px",
    height: "100px", 
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
      <Container className="contact-section" style={{ paddingTop: "100px", position: "relative", zIndex: 1, paddingBottom: "100px" }}>
        <h1 style={{ color: "white", marginBottom: "30px" }}>Contact Me</h1>
        <Row>
          <Col md={6}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group controlId="formName" style={formGroupStyle}>
                <Form.Label style={labelStyle}>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  style={inputStyle}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide your name.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formEmail" style={formGroupStyle}>
                <Form.Label style={labelStyle}>Email address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  style={inputStyle}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email address.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formPhone" style={formGroupStyle}>
                <Form.Label style={labelStyle}>Phone Number</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your phone number"
                  name="phone"
                  style={inputStyle}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide your phone number.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formSubject" style={formGroupStyle}>
                <Form.Label style={labelStyle}>Subject</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter the subject"
                  name="subject"
                  style={inputStyle}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a subject.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formMessage" style={formGroupStyle}>
                <Form.Label style={labelStyle}>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  required
                  name="message"
                  style={textAreaStyle}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a message.
                </Form.Control.Feedback>
              </Form.Group>

              <Button type="submit" style={buttonStyle}>
                Submit
              </Button>
            </Form>
          </Col>

          <Col md={1}>
            <div
              style={{
                borderLeft: "1px solid gray",
                height: "100%",
                marginLeft: "20px",
                marginRight: "20px",
              }}
            ></div>
          </Col>

          <Col md={5}>
            <div style={{ color: "white", paddingLeft: "20px" }}>
              <h3>Contact Information</h3>
              <p>
                <strong>Phone:</strong> <br />
                <Button variant="outline-light" href="tel:+13432549280" style={{ marginBottom: "10px", width: "100%", textAlign: "left" }}>
                  +1 343 254 9280
                </Button>
              </p>
              <p>
                <strong>Email:</strong> <br />
                <Button variant="outline-light" href="mailto:boudiafmehdi03@gmail.com" style={{ width: "100%", textAlign: "left" }}>
                  boudiafmehdi03@gmail.com
                </Button>
              </p>
              <div style={{ marginTop: "30px" }}>
                <h4>Get in Touch</h4>
                <p>
                  Feel free to reach out to me via phone or email. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
}

export default Contact;
