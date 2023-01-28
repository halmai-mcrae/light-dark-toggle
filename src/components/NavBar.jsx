import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink className="navbar-item" to="/">
          My Website
        </NavLink>
        <div
          className={`navbar-burger burger ${isOpen ? 'is-active' : ''}`}
          onClick={handleToggle}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <NavLink className="navbar-item" to="/about">
            About
          </NavLink>
          <NavLink className="navbar-item" to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;