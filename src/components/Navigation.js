import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { routes } from "../helpers/routes";
import useAuth from "../auth/useAuth";

const Navigation = () => {
  const { logout } = useAuth();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to={routes.home}>
          Spanish Trainer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={routes.quizzes}>
              Quizzes
            </Nav.Link>
            <NavDropdown title="Admin" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to={routes.admin.users}>
                Users
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav>
            <Nav.Link as={NavLink} to={routes.login}>
              Login
            </Nav.Link>
            <Nav.Link as={NavLink} to={routes.register}>
              Register
            </Nav.Link>
            <Nav.Link as={NavLink} to={routes.dashboard}>
              Dashboard
            </Nav.Link>
            <Nav.Link onClick={logout} to={routes.dashboard}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
