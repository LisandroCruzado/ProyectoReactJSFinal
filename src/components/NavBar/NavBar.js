import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CartWidget from './CartWidget/CartWidget';
import logo from '../../assets/images/logo.png';
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Nav.Item>
              <Nav.Link as={Link} to={"/"}>
                <img src={logo} alt="Logo de la marca" width='100px' className='d-inline-block align-top' />
              </Nav.Link>
            </Nav.Item>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Item>
              <Nav.Link as={Link} to={"/category/perfumes"} className='listItem'>PERFUMES</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to={"/category/maquillaje"} className='listItem'>MAQUILLAJES</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to={"/category/tratamientos"} className='listItem'>TRATAMIENTOS</Nav.Link>
            </Nav.Item>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;