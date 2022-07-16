import React from "react";
import styles from "./ContactUs.module.css";
import * as mdb from "mdb-ui-kit";
import { Input } from "mdb-ui-kit";

const ContactUs = () => {
  return (
    <div>
      <section className={`intro ${styles.intro}`}>
        <div className="mask d-flex align-items-center h-100">
          <div className="container">
            <div className="row justify-content-center my-5">
              <div className={`col-12 col-lg-10 col-xl-10 `}>
                <div className={`card ${styles.card} `}>
                  <div className="card-body m-3 p-4 p-md-5">
                    <h1 className={`mb-4 display-5 pb-2 ${styles.title}`}>
                      Reach Out
                    </h1>

                    <form action="">
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="firstName"
                              className={`form-control ${styles.input}`}
                            />
                            <label className="form-label" htmlFor="firstName">
                              First Name
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="lastName"
                              className={`form-control ${styles.input}`}
                            />
                            <label className="form-label" htmlFor="lastName">
                              Last Name
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline datepicker">
                            <input
                              type="text"
                              className={`form-control ${styles.input}`}
                              id="birthdayDate"
                            />
                            <label
                              htmlFor="birthdayDate"
                              className="form-label"
                            >
                              Birthday
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <h6 className="mb-2 pb-1">Gender: </h6>

                          <div className="form-check form-check-inline">
                            <input
                              className={`form-check-input  ${styles.radio}`}
                              type="radio"
                              name="inlineRadioOptions"
                              id="femaleGender"
                              value="option1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="femaleGender"
                            >
                              Female
                            </label>
                          </div>

                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="maleGender"
                              value="option2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="maleGender"
                            >
                              Male
                            </label>
                          </div>

                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="otherGender"
                              value="option3"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="otherGender"
                            >
                              Other
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="email"
                              id="emailAddress"
                              className={`form-control ${styles.input}`}
                            />
                            <label
                              className="form-label"
                              htmlFor="emailAddress"
                            >
                              Email
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="tel"
                              id="phoneNumber"
                              className={`form-control ${styles.input}`}
                            />
                            <label className="form-label" htmlFor="phoneNumber">
                              Phone Number
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-12">
                          <div className="mt-4">
                            <input
                              className={`btn btn-lg btn-block ${styles.submitButton}`}
                              type="submit"
                              value="Submit"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
