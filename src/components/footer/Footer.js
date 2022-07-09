import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Steelman_Logo from "../../assets/images/Steelman_Logo.png";
// import { faMail } from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {
  return (
    <MDBFooter className="text-center text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="container text-center">
          <a href="" className="mx-4 text-reset text-center">
            <FontAwesomeIcon
              className={`me-3 ${styles.icon}`}
              icon={faTwitter}
            />
          </a>
          <a href="" className="mx-4 text-reset">
            <FontAwesomeIcon
              className={`me-3 ${styles.icon}`}
              icon={faYoutube}
            />
          </a>
          <a href="" className="mx-4 text-reset">
            <FontAwesomeIcon
              className={`me-3 ${styles.icon}`}
              icon={faInstagram}
            />
          </a>
          <a href="" className="mx-4 text-reset">
            <FontAwesomeIcon
              className={`me-3 ${styles.icon}`}
              icon={faLinkedin}
            />
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Steelman Society</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                sit quibusdam id accusantium, hic fugit vero laudantium quo ab
                at.
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Locations
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Events
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Members
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <FontAwesomeIcon className={`me-3`} icon={faHome} />
                Los Angeles
              </p>
              <p>
                <FontAwesomeIcon className={`me-3`} icon={faEnvelope} />
                leatherapronclub26@gmail.com
              </p>
              <p>
                <FontAwesomeIcon className={`me-3`} icon={faPhone} />
                1-555-502-2200
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className={`text-center p-4 ${styles.footerBottom}`}>
        © 2021 Copyright:
        <a className="text-reset fw-bold mx-1" href="#!">
          SteelmanSociety.com
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
