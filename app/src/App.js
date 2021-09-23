/* eslint-disable prettier/prettier */
import * as React from "react";

import Figure from "./components/Figure";
import Header from "./components/Header";
import Word from "./components/Word";
import WrongLetters from "./components/WrongLetters";
    
import "./App.css"

const words = ["python", "javascript", "ruby", "java", "C", "php" ];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const App = () => {
  //declare states. We will need a playable state, a correct letters and wrong letters state
  //if game is playable
  const [playable, setPlayable] = React.useState(true)

  //change correct letters depending on word
  const [correctLetters, setCorrectLetters]= React.useState([])

//change wrong letters depending on word
  const [wrongLetters, setWrongLetters]= React.useState([])

//need useEffect
//meant to be a used for a side effect in the app
  React.useEffect(() => {
    const handleKeydown = event => {
      const {key, keyCode} = event;
        if (playable && keyCode >= 65 && keyCode <= 90) {
          const letter = key.toLowerCase();
          //if selected word includes the letter is true and 
          //if correctedLetters does not already include the letter then push the letter to the correctLetters array. Instead of using push, the setCorrect letters state updates the correctLetters array.
          if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
              setCorrectLetters(currentLetters => [...correctLetters, letter]);
              // correctLetters.push(letter);
            } else {
              // showNotification();
            }
          } else {
            //if it doesn't include wrongLetter then setWrongLetters state by pushing the letter to the wrong letter array
            if (!wrongLetters.includes(letter)) {
              setWrongLetters(wrongLetters => [...wrongLetters, letter]);
              // wrongLetters.push(letter);
            } else {
              // showNotification();
            }
          }
        }
      }
    console.log("correctLetters",correctLetters);
    console.log("wrongLetters",wrongLetters);
     window.addEventListener("keydown", handleKeydown);
     //removeEventListener will get called to "clean up" the event listener above so at any time there is only one event listener running
      return () => window.removeEventListener("keydown", handleKeydown)
    }, [correctLetters, wrongLetters, playable])
    
    //if there is NO array at the end of useEffect then useEffect will get called everytime the app renders. 
    // if there is an empty array [] useEffect will only get called on the initial render
    //if there are dependencies/states in the array and the dependencies/states are updated then useEffect will be called. 

  
    
  return (
  <>
    <Header />
    <div className="game-container">
      <Figure wrongLetters={wrongLetters}/>
      <WrongLetters wrongLetters={wrongLetters} />
      <Word  selectedWord={selectedWord} correctLetters={correctLetters}/>
    </div>
    
  </>
  )
}

export default App;
