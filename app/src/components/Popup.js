import React from "react";

import { checkWin } from "../helpers/helpers";

const Popup = ({
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayable,
  playable,
  playAgain,
  incrementScore,
}) => {
  let finalMessage = "";
  let finalMessageRevealWord = "";

  if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
    finalMessage = "Congratulations! You won! ";

    if (playable) incrementScore();
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lose") {
    finalMessage = "Sorry, you lose.";
    finalMessageRevealWord = `...the word was:${selectedWord}`;
    setPlayable(false);
  }
  //no array needed so useEffect will run each time a letter is played ??? not sure what useeffect is doing here??
  // React.useEffect(() => setPlayable(true));
  return (
    <div
      className="popup-container"
      style={finalMessage !== "" ? { display: "flex" } : {}}
    >
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
};

export default Popup;
