import React, { Component } from "react";
import {
  Image,
  Navbar,
  Nav,
  // Container,
  Button,
  NavDropdown,
  // Dropdown,
} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { BsArrowRight } from "react-icons/bs";
import logo from "./assets/logo_exercise.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

export default class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar className="main-nav" sticky="top" expand="md" variant="dark">
          <Navbar.Brand href="#home">
            <Image src={logo} alt="Exercise Logo" height="55vh" />
          </Navbar.Brand>

          <NavbarToggle />
          <NavbarCollapse className="justify-content-end">
            <Nav className="menu-nav">
              <NavDropdown
                id="nav-dropdown-products"
                title="Products "
                menuVariant="dark"
                className="dropdown-nav"
              >
                <NavDropdown.Item href="#products/1.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#products/1.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#products/1.3">
                  Something
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                id="nav-dropdown-solutions"
                title="Solutions "
                menuVariant="dark"
                className="dropdown-nav"
              >
                <NavDropdown.Item href="#solutions/2.1">
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item href="#solutions/2.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#solutions/2.3">
                  Something
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                id="nav-dropdown-resources"
                title="Resources "
                menuVariant="dark"
                className="dropdown-nav"
              >
                <NavDropdown.Item href="#resources/3.1">
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item href="#resources/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#resources/3.3">
                  Something
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                id="nav-dropdown-pricing"
                title="Pricing "
                menuVariant="dark"
                className="dropdown-nav"
              >
                <NavDropdown.Item href="#pricing/4.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#pricing/4.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#pricing/4.3">
                  Something
                </NavDropdown.Item>
              </NavDropdown>
              <Button className="button-login-nav">Login</Button>
              <Button className="button-try-nav">
                Try Whitespace free <BsArrowRight />
              </Button>
            </Nav>
          </NavbarCollapse>
        </Navbar>
      </>
    );
  }
}
