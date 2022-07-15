import React from "react";

const SignIn = () => {
  return (
    <div>
      <section className="intro">
        <div className="bg-image h-100">
          <div className="mask d-flex align-items-center h-100">
            <div className="container">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 col-lg-9 col-xl-8">
                  <div className="card">
                    <div className="row g-0">
                      <div className="col-md-4 d-none d-md-block">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Others/sidenav2.jpg"
                          alt="login form"
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-md-8 d-flex align-items-center">
                        <div className="card-body py-5 px-4 p-md-5">
                          <form action="">
                            <h4 className="fw-bold mb-4">
                              Log in to your account
                            </h4>
                            <p className="mb-4">
                              To log in, please fill in these text fiels with
                              your e-mail address and password.
                            </p>

                            <div className="form-outline mb-4">
                              <input
                                type="email"
                                id="form2Example1"
                                className="form-control"
                              />
                              <label
                                className="form-label"
                                htmlFor="form2Example1"
                              >
                                Email address
                              </label>
                            </div>

                            <div className="form-outline mb-4">
                              <input
                                type="password"
                                id="form2Example2"
                                className="form-control"
                              />
                              <label
                                className="form-label"
                                htmlFor="form2Example2"
                              >
                                Password
                              </label>
                            </div>

                            <div className="d-flex justify-content-end pt-1 mb-4">
                              <button
                                className="btn btn-primary btn-rounded"
                                type="button"
                              >
                                Log in
                              </button>
                            </div>
                            <hr />
                            <a className="link float-end" href="#!">
                              Forgot password? Click here.
                            </a>
                          </form>
                        </div>
                      </div>
                    </div>
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

export default SignIn;
