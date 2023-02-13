// Header component with react router dom

import React from "react";
import "./style.css"
import { Outlet, Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Layout = () => {
  return (
    <>
    <header>
    <Container fluid="sm">
      <nav>
        <ul>
          <li>
            <Link to="/" id="headerItem" >Made to Measure.</Link>
          </li>
          <li>
           <Link to="/products" id="headerItem" >Products</Link>
          </li>
        </ul>
      </nav>
      </Container>
      </header>
      <Outlet />
    </>
  )
};

export default Layout;