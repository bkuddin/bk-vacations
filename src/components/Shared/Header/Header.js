import React, { useState } from "react";
import "./Header.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../contexts/useAuth";
import Logo from "../../../images/bk-vacations-logo-black.png";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <>
      <Navbar
        className="nav-bar"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="logo nav-link">
            <img style={{ width: "20%" }} src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link className="nav-style" as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link className="nav-style" as={Link} to="/trips">
              Trips
            </Nav.Link>
            <Nav.Link className="nav-style" as={Link} to="/my-booking">
              My Booking
            </Nav.Link>
            {/* dropdown */}
            <NavDropdown title="Admin" id="collasible-nav-dropdown">
              <div className="button-admin">
                <button className="bk-button">
                  <NavDropdown.Item as={Link} to="/add-package">
                    Add New Package
                  </NavDropdown.Item>
                </button>
              </div>
              <NavDropdown.Item as={Link} to="/manage-bookings">
                Manage Bookings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            {/* dropdown */}

            {user?.email ? (
              <button className="bk-button mx-3" onClick={logOut}>
                Log Out
              </button>
            ) : (
              <Nav.Link className="nav-style" as={Link} to="/login">
                Login
              </Nav.Link>
            )}

            <Navbar.Text>
              Signed in as:
              <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
