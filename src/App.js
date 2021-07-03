import "./App.css";
import React, { Fragment, useEffect, useState } from "react";
import largeHand from "./images/hand-96.png";
import largeScissors from "./images/scissor-96.png";
import largeRock from "./images/rock-96.png";
import Computer from "./components/Computer";
import Player from "./components/Player";
import PropTypes from "prop-types";

App.propTypes = {
  images: PropTypes.array,
};
App.defaultProps = {
  images: [largeHand, largeScissors, largeRock], // lá, kéo,búa
};

function App(props) {
  const { images } = props;
  let [playerScore, setPlayerScore] = useState(0);
  let [emptyScore, setEmptyScore] = useState(0);
  const [playerPick, setPlayerPick] = useState(undefined);
  const [randomPick, setRandomPick] = useState(undefined);

  const handlePlayerPick = (playerPick) => {
    setPlayerPick(playerPick);
    randomGenerate();
  };

  const randomGenerate = () => {
    const randomPick = Math.floor(Math.random() * images.length);
    setRandomPick(randomPick);
    console.log("randomPick", randomPick);
  };

  useEffect(() => {
    const checkWinner = () => {
      // let { playerScore, emptyScore, playerPick, randomPick } = props;
      if (playerPick === randomPick) {
        // Hòa
        return;
      } else {
        // người dùng chọn lá
        if (playerPick === 0) {
          // máy chọn búa => máy thua
          if (randomPick === 2) {
            playerScore++;
            // máy chọn kéo => máy thắng
          } else if (randomPick === 1) {
            emptyScore++;
          }
        }
        // người dùng chọn kéo
        else if (playerPick === 1) {
          // máy chọn lá => máy thua
          if (randomPick === 0) {
            playerScore++;
          }
          // máy chọn búa => máy thắng
          else if (randomPick === 2) {
            emptyScore++;
          }
        }
        // người dùng chọn búa
        else if (playerPick === 2) {
          // máy chọn lá => máy thắng
          if (randomPick === 0) {
            emptyScore++;
          }
          // máy chọn kéo => máy thua
          else if (randomPick === 1) {
            playerScore++;
          }
        }
      }
      setPlayerScore(playerScore);
      setEmptyScore(emptyScore);
    };
    checkWinner();
    // eslint-disable-next-line
  }, [playerPick, randomPick]);

  return (
    <Fragment>
      <section className="section">
        <Computer image={images[randomPick]} />
      </section>
      <section className="section">
        <h1>
          <span className="player">Player: {playerScore}</span> -&nbsp;
          <span className="computer">Computer: {emptyScore}</span>
        </h1>
      </section>
      <section className="section">
        <Player
          image={images[playerPick]}
          handlePlayerPick={handlePlayerPick}
        />
      </section>
    </Fragment>
  );
}

export default App;
