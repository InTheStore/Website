import React from "react";
import logo from "../assets/coffee.svg";
import search from "../assets/search.svg";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="navbar-no-padding"
      style={{ fontFamily: "Caveat" }}
    >
      <Container>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="w-100 flex-column flex-lg-row text-center px-0">
            {/* Home - Left Corner */}
            <div className="col-lg-3 d-flex justify-content-lg-start justify-content-center ps-lg-0">
              <Nav.Link
                as={Link}
                to="/"
                className="my-2 my-lg-0 ms-lg-0 ps-lg-0"
                style={{
                  marginLeft: 0,
                  paddingLeft: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px", // Space between icon and text
                }}
              >
                <img src={logo} alt="coffee" width="24" height="24" />
                <span>Caffenate</span>
              </Nav.Link>
            </div>

            {/* Center Links - Coffee, Boba, Juice */}
            <div className="col-lg-6 d-flex flex-column flex-lg-row justify-content-center">
              <Nav.Link as={Link} to="/coffee" className="my-2 my-lg-0 mx-lg-3">
                Coffee
              </Nav.Link>
              <Nav.Link as={Link} to="/boba" className="my-2 my-lg-0 mx-lg-3">
                Boba
              </Nav.Link>
              <Nav.Link as={Link} to="/juice" className="my-2 my-lg-0 mx-lg-3">
                Juice
              </Nav.Link>
            </div>

            {/* Search - Right Corner */}
            <div className="col-lg-3 d-flex justify-content-lg-end justify-content-center pe-lg-0">
              <Nav.Link
                as={Link}
                to="/search"
                className="my-2 my-lg-0 me-lg-0 pe-lg-0"
                style={{ marginRight: 0, paddingRight: 0 }}
              >
                Search
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
