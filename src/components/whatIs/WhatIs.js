import React from "react";
import styles from "./WhatIs.module.css";

const WhatIs = () => {
  return (
    <div>
      <div className="container-fluid p-0"></div>
      <div className="text-center d-flex row align-items-center p-0 m-0">
        <img
          src="https://picsum.photos/3200/1800?grayscale"
          alt=""
          className="img-fluid p-0"
        />
        <h1 className={`position-absolute text-center display-5 ${styles.h1}`}>
          Steelman Society is about being the change we want to see in the
          world.
        </h1>
      </div>
      <div className="container-fluid p-0">
        <main className={`container-fluid bg-light ${styles.main} `}></main>
      </div>
    </div>
  );
};

export default WhatIs;
