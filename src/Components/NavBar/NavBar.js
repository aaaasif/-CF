import React from 'react';
import "./NavBar.css"
import logo from "./../../assets/football-website-image/logo.png"
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
    return (
      <Navbar bg="light" expand="lg">
          <Container>
            <div>
              <Navbar.Brand>
                <img
                  src={logo}
                  width="49.87px"
                  height="48.6px"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                  />
                  <span className='logo-name'>#CF</span></Navbar.Brand>
              </div>
              <div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Service</Nav.Link>
                    <Nav.Link href="#link">Agency</Nav.Link>
                    <Nav.Link href="#link">Player</Nav.Link>
                    <Nav.Link href="#link">Contact us</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </div>  
          </Container>
      </Navbar>
    );
};

export default NavBar;