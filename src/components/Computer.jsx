import React, { Fragment } from "react";

const Computer = ({ image }) => {
  return (
    <Fragment>
      <div className="columns">
        <div className="column">
          <h1 className="title">Computer</h1>
        </div>
      </div>

      <div className="columns">
          <div className="column">
            {image !== undefined ? <img src={image} alt="" /> : ""}
          </div>
      </div>
    </Fragment>
  );
};

export default Computer;
