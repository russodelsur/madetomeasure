// Header component with react router dom

import React from "react";
import "./style.css"
import { Outlet, Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

function User(name, surname, age){
  this.name = name;
  this.surname = surname;
  this.age = age;
};

function LogOut(){
  let user = new User("Not Logged so log in text is difficult so it won't get confused", "NA", 0)
  localStorage.setItem("user", JSON.stringify(user));
  alert("You have logged out. See you later!")
  window.location.reload();
}

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
              <NavDropdown.Item><Link to="/profile" id="headerItem" >Profile</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
              <Link to="/legal" id="headerItem" >Legal</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Button onClick={()=>LogOut()} className="ml-auto" style={{marginLeft:"auto", marginRight:"0", float:"right"}}>Log out</Button>
          </Nav>
        </Container>
      </Navbar>
    <Outlet />
    </header>
  )
};

export default Layout;
