"use client";
import React, { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import Rating from 'react-rating-stars-component';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Particle from '../Particle';
import { UserContext } from '../../UserContext';

function AddTestimonial() {
  const { user } = useContext(UserContext);
  const [validated, setValidated] = useState(false);
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');
  const [formKey, setFormKey] = useState(Date.now());
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login'); 
    }
  }, [user, router]);

  if (!user) {
    return null; 
  }

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      event.preventDefault();
      const newTestimonial = { name: user.firstName + ' ' + user.lastName, rating, message };
      const storedTestimonials = localStorage.getItem('testimonials');
      const testimonials = storedTestimonials ? JSON.parse(storedTestimonials) : [];
      testimonials.push(newTestimonial);
      localStorage.setItem('testimonials', JSON.stringify(testimonials));
      setMessage('');
      setRating(0);
      setValidated(false);
      setFormKey(Date.now());
      toast.success('Testimonial added successfully!');
      router.push('/testimonials');
    }
  };

  const containerStyle = {
    paddingTop: '100px',
    paddingBottom: '100px',
    position: 'relative',
    zIndex: 1,
  };

  const sectionTitleStyle = {
    color: 'white',
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '2.5em',
  };

  const formGroupStyle = {
    marginBottom: '20px',
  };

  const labelStyle = {
    color: 'white',
    fontSize: '1.2em',
  };

  const textAreaStyle = {
    borderRadius: '5px',
    padding: '10px',
    backgroundColor: '#444',
    color: 'white',
    border: '1px solid #555',
    marginBottom: '10px',
    height: '100px',
  };

  const buttonStyle = {
    display: 'block',
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    fontSize: '1.2em',
    border: 'none',
    cursor: 'pointer',
    marginTop: '20px',
  };

  const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 1,
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <div style={backgroundStyle}>
        <Particle />
      </div>
      <Container style={containerStyle}>
        <div style={contentStyle}>
          <h1 style={sectionTitleStyle}>Add Testimonial</h1>
          <Row>
            <Col md={8} className="mx-auto">
              <Form noValidate validated={validated} onSubmit={handleSubmit} key={formKey}>
                <Form.Group style={formGroupStyle}>
                  <Form.Label style={labelStyle}>Name</Form.Label>
                  <Form.Control
                    plaintext
                    readOnly
                    value={user.firstName + ' ' + user.lastName}
                    style={{ backgroundColor: 'transparent', color: 'white', padding: '10px' }}
                  />
                </Form.Group>

                <Form.Group controlId="formRating" style={formGroupStyle}>
                  <Form.Label style={labelStyle}>Rating</Form.Label>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <Rating count={5} value={rating} onChange={handleRatingChange} size={30} activeColor="#ffd700" />
                  </div>
                  <Form.Control.Feedback type="invalid">Please provide a rating.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formMessage" style={formGroupStyle}>
                  <Form.Label style={labelStyle}>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    required
                    style={textAreaStyle}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">Please provide a message.</Form.Control.Feedback>
                </Form.Group>

                <Button type="submit" style={buttonStyle}>
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
      <ToastContainer />
    </div>
  );
}

export default AddTestimonial;
