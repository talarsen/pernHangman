import React from "react";

const Scoreboard = ({ score, setScore, players, setPlayers, loadPlayers }) => {
  return (
    <div>
      <div style={{ marginTop: "35px" }}>
        <h3 className="scoreboard-title">Hangman Scoreboard</h3>
      </div>
      <div>
        <h3 className="header">Score:{score}</h3>
        <table className="table table-striped">
          <thead className="table thead-light">
            <tr>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {/*** player list will go here */}
            {players.map((player) => (
              <>
                <tr key={player.id}>
                  <td className="label">{player.name}</td>
                  <td className="label">{player.score}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Scoreboard;
