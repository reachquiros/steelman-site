import React from "react";
import styles from "./Home.module.css";
import Card from "../cards/Card";

const Home = (props) => {
  return (
    <div className={` ${styles.body} `}>
      <div className="container-fluid p-0">
        <img
          src="https://picsum.photos/2800/1200"
          alt=""
          className="img-fluid shadow-sm"
        />
      </div>
      <div className="my-5 mx-2">
        <div className="p-5 m-5 text-center">
          <h1 className={`${styles.title}`}>
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </h1>
          <p className={`${styles.subtitle}`}>
            Duis ut diam quam nulla porttitor massa id neque.
          </p>
        </div>
      </div>
      <div className="container-fluid p-0">
        <img
          src="https://picsum.photos/2800/800"
          alt=""
          className={`img-fluid shadow-sm ${styles.fadeInImage}`}
        />
      </div>
      <div className="container m-5 mx-auto p-5">
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
