// Basic.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Basic = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products`)
      .then(res => {
        console.log(res.data);
        setUserData(res.data.products);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {userData.map((product, id) => (
            <Col lg={3} key={id} >
              <Card  className="product-card" style={{height:"450px"}}>
                <div className="image-container">
                  <Card.Img style={{height:"200px"}} className="product-image" variant="top" src={product.thumbnail} />
                </div>
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    {product.description}
                  </Card.Text>
                  <Card.Text>
                    Price: ${product.price}
                  </Card.Text>
                  <Link to={`/product/${product.id}`}>
                    <Button variant="primary">View Details</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Basic;
