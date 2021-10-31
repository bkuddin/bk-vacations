import "./Header.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
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
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/home" className="logo nav-link">
            <img style={{ width: "20%" }} src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link className="nav-style" as={HashLink} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link className="nav-style" as={HashLink} to="/home#vacations">
              Vacations
            </Nav.Link>
            <div className="button-my-Booking">
              <Nav.Link className="bk-button" as={Link} to="/my-booking">
                My Booking
              </Nav.Link>
            </div>
            {/* dropdown */}
            <NavDropdown title="Admin" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/add-package">
                Add New Package
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/manage-bookings">
                Manage Bookings
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item as={Link} to="/add-vacations">
                Add New Vacation
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
