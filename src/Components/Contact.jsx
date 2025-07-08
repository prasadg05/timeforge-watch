import React from 'react';
import { Card, Button } from 'react-bootstrap';

const images = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  "https://images.unsplash.com/photo-1612831455546-bb55b8c1ebc6",
  "https://images.unsplash.com/photo-1607746882042-944635dfe10e"
];

const Contact = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center',
        padding: '20px'
      }}
    >
      {Array.from({ length: 8 }).map((_, index) => (
        <Card key={index} style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src={images[index % images.length]}
            alt={`Card ${index + 1}`}
          />
          <Card.Body>
            <Card.Title>Card Title {index + 1}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Visit</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Contact;
