import React from "react";
import "./Events.css";

const Events = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-6 mb-2">
            <div className="p-5 bg-primary"></div>
          </div>
          <div className="col-3 mb-2">
            <div className="p-5 bg-secondary"></div>
          </div>
          <div className="col-3 mb-2">
            <div className="p-5 bg-info"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-3 mb-2">
            <div className="p-5 bg-danger"></div>
          </div>
          <div className="col-3 mb-2">
            <div className="p-5 bg-success"></div>
          </div>
          <div className="col-6 mb-2">
            <div className="p-5 bg-danger"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 mb-2">
            <div className="p-5 bg-warning"></div>
          </div>
          <div className="col-6 mb-2">
            <div className="p-5 bg-secondary"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-3 mb-2">
            <div className="p-5 bg-primary"></div>
          </div>
          <div className="col-3 mb-2">
            <div className="p-5 bg-danger"></div>
          </div>
          <div className="col-3 mb-2">
            <div className="p-5 bg-info"></div>
          </div>
          <div className="col-3 mb-2">
            <div className="p-5 bg-success"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
