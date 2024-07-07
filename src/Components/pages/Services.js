// src/Services.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Simulate an API call
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
      .then(response => {
        setServices(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <section id='services'>
    <Container>
    <h2>Our Services</h2>
      <Row>
        {services.map(service => (
          <Col md={4} key={service.id}>
            <Card className="mb-4">
              <Card.Img variant="top" src={service.url} />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </section>
  );
};

export default Services;
