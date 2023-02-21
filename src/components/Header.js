// Header component with react router dom

import React from "react";
import "./style.css"
import { Outlet, Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

const Layout = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Made To Measure.</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to="/" id="headerItem" >Home</Link></Nav.Link>
            <Nav.Link ><Link to="/products" id="headerItem" >Products</Link></Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/profile">Profile</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/interest">Interest Calculator</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
              <Link to="/legal">Legal</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    <Outlet />
    </header>
  )
};

export default Layout;
