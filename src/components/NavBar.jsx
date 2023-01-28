import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {

  return (
    <nav className="navbar">
      <div className="btn-group" role="group" aria-label="Basic example">
      <Link to="/"> <button
            type="button"
            className="btn btn-outline-secondary"
            style = {{margin: '10px'}}
          >
            Home
          </button></Link>
      <Link to="/about">
      <button
            type="button"
            className="btn btn-outline-secondary"
            style = {{margin: '10px'}}
          >
            About
          </button>
      </Link>
          <span />
          <span />
          <span />
        </div>
    </nav>
  );
};

export default NavBar;