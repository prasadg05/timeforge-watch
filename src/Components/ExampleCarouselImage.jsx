import React from 'react';
import '../Css/Home.css';

export default function ExampleCarouselImage({ im }) {
  return (
    <div>
      <img
        src={im}
        alt="carousel"
        className="img-fluid"
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
      />
    </div>
  );
}
