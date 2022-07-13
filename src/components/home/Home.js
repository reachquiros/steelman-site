import React, { useEffect } from "react";
import home_front from "../../assets/images/home_front.jpg";
import mid_elem_leaf from "../../assets/images/mid_elem_leaf.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./Home.module.css";
import Card from "../cards/Card";

const Home = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className={` ${styles.body} `}>
      <div className="container-fluid p-0">
        <img src={home_front} alt="" className="img-fluid shadow-sm" />
      </div>
      <div data-aos="fade-in">
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
            src={mid_elem_leaf}
            alt=""
            className={`img-fluid shadow-sm ${styles.fadeInImage}`}
          />
        </div>
      </div>

      <div className="container m-5 mx-auto p-5">
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
