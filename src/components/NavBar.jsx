import React, { useEffect, useState, useRef } from 'react'
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

// Icons 
import logolb  from '../logos/logolb.svg'

// Styles
import './NavBar.css'


const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <Navbar ref={navbarRef} className="navbar" expand="lg" expanded={expanded}>
      <Navbar.Brand className="content" bg="transparent" href="/">
        <img src={logolb} className="lb-logo" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className="ml-auto"
        onClick={() => setExpanded(expanded ? false : "expanded")}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/templates" className="nav-link">
            Templates
          </Link>
          <Link to="/snippets" className="nav-link">
            Snippets
          </Link>
          <Link to="/guestbook" className="nav-link">
            Guestbook
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;