import React from "react";
import styles from "./WhatIs.module.css";
import van_grayscale from "../../assets/images/van_grayscale.jpg";

const WhatIs = () => {
  return (
    <div>
      <div className="container-fluid p-0"></div>
      <div className="text-center d-flex row align-items-center p-0 m-0">
        <img src={van_grayscale} alt="" className="img-fluid p-0" />
        <h1 className={`position-absolute text-center display-5 ${styles.h1}`}>
          Steelman Society is about being the change we want to see in the world
        </h1>
      </div>
      <div className="">
        <main className={`container-fluid bg-light ${styles.main} `}>
          <div className="container text-center">
            <h2 className="display-6 pt-5">Lorem ipsum dolor sit amet.</h2>
            <p className="display-9 mb-5 p-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              reprehenderit possimus quae laborum sequi blanditiis dicta
              similique commodi eos accusantium sed, aperiam officia, dolor,
              quia saepe porro optio? Ab quia optio repellat quis beatae tenetur
              non voluptas quisquam eveniet eaque placeat eligendi nam deserunt,
              ad rem odio? Optio in dolor deleniti ullam nam quam veniam, non
              tempore cupiditate fugit quaerat earum et voluptatem, rem odit
              odio fugiat porro, voluptates atque. Expedita animi, quasi sed
              obcaecati corrupti et consectetur, ratione commodi provident optio
              totam sequi ipsa quisquam quae? Rerum, quia pariatur voluptatum
              fuga blanditiis iste. In placeat sunt dignissimos perspiciatis
              omnis.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default WhatIs;
