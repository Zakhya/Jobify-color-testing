import React from "react";
import Wrapper from "../assets/wrappers/GuessedLetters";

const GuessedLetters = ({ guessedLetters, puzzleArray, levelSet }) => {
  guessedLetters.map((letterObject) => {
    return console.log(letterObject.isBadGuess);
  });
  return (
    <Wrapper>
      <div className="guessed-letters-container">
        {guessedLetters.map((letterObject, index) => {
          let isInCurrentSet = letterObject.set === levelSet;

          let className;
          if (isInCurrentSet) {
            className = letterObject.isBadGuess
              ? "wrong-guessed-letter"
              : "guessed-letter";
          } else {
            className = letterObject.isBadGuess
              ? "old-wrong-guessed-letter"
              : "old-guessed-letter";
          }

          return (
            <span className={className} key={index}>
              {letterObject.letter}
            </span>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default GuessedLetters;
