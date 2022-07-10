import React from "react";
import styles from "./WhatIs.module.css";

const WhatIs = () => {
  return (
    <div className="container-fluid p-0">
      <div className="text-center d-flex row align-items-center">
        <img
          src="https://picsum.photos/3200/1800?grayscale"
          alt=""
          className="img-fluid"
        />
        <h1
          className={`position-absolute text-center mt-4 display-5 ${styles.h1}`}
        >
          Steelman Society is about being the change we want to see in the
          world.
        </h1>
      </div>
    </div>
  );
};

export default WhatIs;
