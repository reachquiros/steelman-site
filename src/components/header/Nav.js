import React from "react";
import styles from "./Nav.module.css";
import Steelman_Logo from "../../assets/images/Steelman_Logo.png";
import "bootstrap/js/src/collapse.js";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
// import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div>
      <nav className="navbar py-0 navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link to="/" className={`navbar-brand ${styles.brand}`}>
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
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#toggleMobileMenu"
            aria-controls="toggleMobileMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={`navbar-toggler-icon ${styles.togglerBtn}`}></span>
          </button>
          <div className="collapse navbar-collapse" id="toggleMobileMenu">
            <ul className="navbar-nav mb-lg-0 text-center  ms-auto">
              <li className="nav-item">
                <Link to="/what-is" className="nav-link">
                  What Is The Steelman Society
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/events" className="nav-link">
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/locations" className="nav-link">
                  Locations
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact-us" className="nav-link">
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
