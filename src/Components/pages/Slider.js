import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';

const Slider = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch data from the fake API
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=5')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <Carousel>
      {items.map(item => (
        <Carousel.Item key={item.id}>
          <img
            className="d-block w-100"
            src={item.url}
            alt={item.title}
          />
          <Carousel.Caption>
            <h3>{item.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
