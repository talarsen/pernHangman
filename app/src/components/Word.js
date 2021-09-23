//to display a word in hangman
import React from "react";

//take the selected word and split it in the array.
//then map each letter to the browswer
//if the corrected letters array includes the mapped letter then display the letter otherwise leave it "" blank
function Word({ selectedWord, correctLetters }) {
  return (
    <div className="word">
      {selectedWord.split("").map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ""}
          </span>
        );
      })}
    </div>
  );
}

export default Word;
