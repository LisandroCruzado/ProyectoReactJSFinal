import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/images/logo.png';
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg" id='nav' className="d-flex justify-content-center align-items-center">
      <Container>
        <Nav className="me-auto" id='navSection1'>
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
        <div id='navSection2'>
          <Navbar.Brand>
            <Nav.Link as={Link} to={"/"}>
              <img src={logo} alt="Logo de la marca" width='100px' className='d-inline-block align-top' />
            </Nav.Link>
          </Navbar.Brand>
        <CartWidget />
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
