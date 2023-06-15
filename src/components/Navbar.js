import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  // Destructure the props

  const { title, homeText, aboutText, mode, toggleMode } = props;

  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">

        {/* Navbar Brand */}

        <Link className="navbar-brand" to="/">{title}</Link>

        {/* Navbar Toggler */}

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Collapse */}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           
            {/* Home Link */}

            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">{homeText}</Link>
            </li>

            {/* About Link */}

            <li className="nav-item">
              <Link className="nav-link" to="/about">{aboutText}</Link>
            </li>

            {/* Contact Link */}
{/* 
            <li className="nav-item">
              <Link className="nav-link" to="/contact">{contactText}</Link>
            </li> */}
          </ul>
        </div>

        {/* Dark Mode Switch */}

        <div className={`form-check form-switch text-${mode === "light" ? "dark" : "light"}`}>
          <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
        </div>
      </div>
    </nav>
  );
}

// PropTypes for type checking

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  homeText: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  contactText: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired
};

// Default props values

Navbar.defaultProps = {
  title: "set title here",
  homeText: "Home",
  aboutText: "About",
  contactText: "Contact Us"
};
