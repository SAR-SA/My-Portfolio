import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom'
import Avatar from '../assets/Avatar.JPG';
import "../styles/Nav.css";


function NavTop() {
  return (
    <div>
      <Navbar className="navBar" collapseOnSelect expand="lg" >
        <Navbar.Brand href="#home">
          <img
            src={Avatar}
            width="70"
            height="70"
            className="d-inline-block align-top"
            alt=""
          />
        </Navbar.Brand>
        {/* <Nav className="mr-auto">
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/projects">Projects</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav> */}
        <Navbar className="navBar" collapseOnSelect expand="lg">
          <Navbar.Brand id="name">Shawn A. Rather</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav" className="toggle">
            <Nav className="navBox mr-auto" >
              <Link to="/about" className="Links mr-2">About</Link>
              <Link to="/projects" className="Links mr-2">Projects</Link>
              <Link to="/contact" className="Links">Contact</Link>
            </Nav>
            {/* <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
      </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Navbar>
        {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> */}
      </Navbar>
    </div>

  )
}

export default NavTop;

