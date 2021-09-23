import React from "react";

const Scoreboard = ({ score, setScore, players, setPlayers }) => {
  const onClick = (e) => {
    e.preventDefault();
    setScore(score + 1);
  };
  return (
    <div>
      <h3 className="scoreboard-title">Hangman Scoreboard</h3>
      <div>
        <h3 className="header">
          <button onClick={onClick}>Add Score</button>Score:{score}
        </h3>
      </div>
    </div>
  );
};

export default Scoreboard;
