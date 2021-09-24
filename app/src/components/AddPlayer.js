import React from "react";
const AddPlayer = ({ addPlayer }) => {
  const [player, setPlayer] = React.useState([]);
  const canAdd = player !== "";
  const onSubmit = (e) => {
    e.preventDefault();
    if (canAdd) {
      addPlayer({ player });
      setPlayer("");
    }
  };
  return (
    <>
      <div style={{ marginBottom: "-40px" }}>
        <h3 className="my-5 ">Add Player</h3>
      </div>
      <form className="d-flex">
        <input
          className="form-conrol"
          type="text"
          placeholder="Player Name"
          value={player}
          onChange={(e) => setPlayer(e.target.value)}
        />
        <button
          // disabled={!canAdd}
          className="btn btn-primary btn-sm"
          onClick={onSubmit}
        >
          Add Player
        </button>
      </form>
    </>
  );
};

export default AddPlayer;
