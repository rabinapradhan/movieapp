import { Nav, Navbar, Form, Container } from "react-bootstrap";
import { NavWrapper } from "./style";

import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

export default function Navbars() {
  return (
    <NavWrapper>
      <Navbar className="bg-dark" text-white expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className="links">
              {" "}
              Movie App
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form className="inline-block">
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <BiSearch className="icons" />
            </Form>
            <Nav className="ms-auto">
              <Link to="/" className="nav-link text-white">
                Home
              </Link>
              <Link to="/tvshow" className="nav-link text-white">
                TV shows
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavWrapper>
  );
}
