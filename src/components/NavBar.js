import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar className="color-nav" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Exercise</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#products">Products</Nav.Link>
              <Nav.Link href="#solutions">Solutions</Nav.Link>
              <Nav.Link href="#resources">Resources</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}
