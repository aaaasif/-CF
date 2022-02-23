import React from 'react';
import { Container, Nav, Navbar, Spinner } from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar className="navBar" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand >
          <img width="120px" src="https://i.ibb.co/vsxmmvr/cover.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link activeClassName="current"  to="/home">
              Home
            </Nav.Link>

            <Nav.Link activeClassName="current"  to="/products">
              Products
            </Nav.Link>
            <Nav.Link activeClassName="current"  to="/dashboard">
              Dashboard
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default NavBar;