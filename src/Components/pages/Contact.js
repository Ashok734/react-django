import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import Navbar from '../Navbar'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const { name, email, message } = formData;
        const newErrors = {};
        if (!name) newErrors.name = 'Name is required';
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!message) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            try {
                await axios.post('ENTER YOUR API LINK HERE', formData);
                setSubmitted(true);
                setFormData({ name: '', email: '', message: '' });
            } catch (error) {
                console.error('There was an error submitting the form!', error);
            }
        } else {
            setErrors(formErrors);
        }
    };

    return (
      <div>
         <Navbar />
         <h3>Contact us</h3>
      <Container>
        <Form onSubmit={handleSubmit}>
            {submitted && <Alert variant="success">Form submitted successfully!</Alert>}
            <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.name}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.email}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    isInvalid={!!errors.message}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.message}
                </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </Container>
        </div>
    );
};

export default Contact;
