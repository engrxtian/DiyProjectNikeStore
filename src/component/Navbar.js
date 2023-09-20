import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';








function NavScroll() {
  return (
    <>
      <Navbar expand="lg" className="navba" sticky="top">
        <Container fluid>
          <Navbar.Brand href="#">
            <h3 className='navgok'><i>Nike</i></h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#home">
                <h5 className='navgok'>Home</h5>
              </Nav.Link>
              <Nav.Link href="#product">
                <h5 className='navgok'>Product</h5>
              </Nav.Link>
              <Nav.Link href="#about">
                <h5 className='navgok'>About Us</h5>
              </Nav.Link>
              <Nav.Link href="#contact">
                <h5 className='navgok'>Contact</h5>
              </Nav.Link>
            </Nav>
            <Form className="searchButton d-flex">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <Form.Control
               type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
              <Button variant="outline-primary" className="searchButton d-flex">Search</Button>
            </Form>
            <Nav.Link href="#cart">
              <FontAwesomeIcon icon={faShoppingCart} className="cart-icon m-2" />
            </Nav.Link>
            <Nav.Link>
              <FontAwesomeIcon icon={faUser} className="user-icon m-2" />
            </Nav.Link>
            <Button variant="primary" className="m-2">
              Sign Up
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavScroll;
