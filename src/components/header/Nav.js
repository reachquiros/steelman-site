import React from "react";
import "./Nav.css";
import Steelman_Logo from "../../assets/images/Steelman_Logo.png";
import "bootstrap/js/src/collapse.js";

import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div>
      <nav className="navbar py-0 navbar-expand-lg navbar">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand brand">
            <img
              src={Steelman_Logo}
              alt=""
              width="75"
              height="75"
              className="d-inline-block mx-2"
            />
            Steelman
          </Link>

          <button
            className="navbar-toggler collapsed mx-2 d-flex d-lg-none flex-column justify-content-around"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#toggleMobileMenu"
            aria-controls="toggleMobileMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>
          <div className="collapse navbar-collapse" id="toggleMobileMenu">
            <ul className="navbar-nav mb-lg-0 text-center  ms-auto">
              <li className="nav-item ">
                <Link to="/what-is" className="nav-link nav-link-ltr">
                  What Is The Steelman Society
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/events" className="nav-link nav-link-ltr">
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/locations" className="nav-link nav-link-ltr">
                  Locations
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact-us" className="nav-link nav-link-ltr">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
