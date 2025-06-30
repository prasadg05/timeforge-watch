import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Row, Col } from 'react-bootstrap/';
import "./Adimost.css"

function Axiomst3() {
    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(res => setdata(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <Row>
            {data.map((a) => (
                <Col key={a.id} xs={12} sm={6} md={3}>
                    <Card style={{ minHeight: '30rem',width:"18rem", marginBottom: '20px' }}>
                        <Card.Img variant="top" src={a.image} style={{width:"200px" , height:"200px" , objectFit:"cover" , objectPosition:"center center", border: "5px solid orange" , borderRadius: "10px", filter:"blur(1px)"}}  />
                        <Card.Body>
                            <Card.Title>{a.Title}</Card.Title>
                            <Card.Text style={{fontSize:"8px",fontWeight:"800"}}>
                                {a.description}
                            </Card.Text>
                            
                            <Button variant='none'>Apply!</Button>
                        </Card.Body>
                    </Card>
                   
                </Col>
            ))}
        </Row>
        
    );
}

export default Axiomst3;
