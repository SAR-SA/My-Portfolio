import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom'
import Avatar from '../assets/Avatar.JPG';
import "../styles/Nav1.css";


function NavTop() {
    return (
        <div className="navDiv">
            <Navbar className="navBar" id="navTop" collapseOnSelect expand="lg" style={{zIndex:1}}>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={Avatar}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />' '
      <span id="name">Shawn A. Rather</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" id="toggle_button" />
                <Navbar.Collapse id="responsive-navbar-nav" className="toggle" >
                    <Nav className="navBox mr-auto" >
                        <Link to="/about" className="Links mr-2">About</Link>
                        <Link to="/projects" className="Links mr-2">Projects</Link>
                        <Link to="/contact" className="Links">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavTop;