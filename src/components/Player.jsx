import React, { Fragment } from "react";
import smallHand from "../images/hand-48.png";
import smallRock from "../images/rock-48.png";
import smallScissors from "../images/scissor-48.png";

const Player = ({ image, handlePlayerPick }) => {
  const handleClick = (e) => {
    const pick = parseInt(e.target.alt);
    handlePlayerPick(pick);
    console.log(pick);
  };

  return (
    <Fragment>
      <div className="columns">
          <div className="column">
            {image !== undefined ? <img src={image} alt="" /> : ""}
          </div>
      </div>

      <div className="row">
          <div className="column">
            <figure className="image">
              <img src={smallHand} alt="0" onClick={handleClick} />
            </figure>
          </div>

          <div className="column">
            <figure className="image">
              <img src={smallScissors} alt="1" onClick={handleClick} />
            </figure>
          </div>

          <div className="column">
            <figure className="image">
              <img src={smallRock} alt="2" onClick={handleClick} />
            </figure>
          </div>
      </div>

      <div className="columns">
        <div className="column">
          <p className="player">Player</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Player;
