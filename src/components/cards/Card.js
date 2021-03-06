import React from "react";
import pattern_grayscale_card from "../../assets/images/pattern_grayscale_card.jpg";
import compass_card from "../../assets/images/compass_card.jpg";
import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={`container`}>
      <div className="row ">
        <div className="col-lg-6 col-sm-12 p-1">
          <div className={`card shadow-sm ${styles.card} `}>
            <img
              src={pattern_grayscale_card}
              className="card-img-top"
              alt="..."
            />
            <div className={`card-body my-3 mx-2 ${styles.cardBody}`}>
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 p-1">
          <div className={`card shadow-sm ${styles.card} `}>
            <img src={compass_card} className="card-img-top" alt="..." />
            <div className="card-body my-3 mx-2">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
