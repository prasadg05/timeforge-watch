import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import '../Css/Navbar.css';
import '../Css/Header.css';

function BasicExample() {
  return (
    <Navbar expand="lg" className="Nav1">
      <Container>
        <Navbar.Brand className="brand"><b>TIMEFORGE</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to='/' className='nav-link'>HOME</Nav.Link>
            <Nav.Link as={Link} to='/Men' className='nav-link'>MEN</Nav.Link>
            <Nav.Link as={Link} to='/Women' className='nav-link'>WOMEN</Nav.Link>
            <Nav.Link as={Link} to='/Kids' className='nav-link'>SMARTWATCH</Nav.Link>  
            <Nav.Link as={Link} to='/Brands' className='nav-link'>BRANDS</Nav.Link>
            <Nav.Link as={Link} to='/Stores' className='nav-link'>STORES</Nav.Link>
            <Nav.Link as={Link} to='/Offers' className='nav-link'>OFFERS</Nav.Link>
          </Nav>

          <Form inline className="search-form">
            <Form.Control type="text" placeholder="Search" className="search-input" />
            <Button type="submit" className="search-btn">Search</Button>
          </Form>

          <Button className="login-btn">Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
