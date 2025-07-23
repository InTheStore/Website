import React from "react";
import logo from "../assets/react.svg";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      style={{ fontFamily: "Caveat" }}
    >
      <Container>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="w-100 flex-column flex-lg-row justify-content-center text-center">
            <Nav.Link as={Link} to="/shops" className="my-2 my-lg-0 mx-lg-3">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/coffee" className="my-2 my-lg-0 mx-lg-3">
              Coffee
            </Nav.Link>
            <Nav.Link as={Link} to="/boba" className="my-2 my-lg-0 mx-lg-3">
              Boba
            </Nav.Link>
            <Nav.Link as={Link} to="/juice" className="my-2 my-lg-0 mx-lg-3">
              Juice
            </Nav.Link>
            <Nav.Link as={Link} to="/search" className="my-2 my-lg-0 mx-lg-3">
              Search
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
