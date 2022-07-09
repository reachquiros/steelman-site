import React from "react";
import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={`container ${styles.cardContainer}`}>
      <div className="row g-2 row-cols-1 row-cols-md-2 g-4">
        <div className="col p-3">
          <div className="card shadow-sm ">
            <img
              src="https://picsum.photos/600/400?blur"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col p-3">
          <div className="card shadow-sm">
            <img
              src="https://picsum.photos/600/400?grayscale"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
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
