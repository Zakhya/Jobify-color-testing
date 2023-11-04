import React from "react";
import Wrapper from "../assets/wrappers/GuessedLetters";

const GuessedLetters = ({ guessedLetters, puzzleArray }) => {
  return (
    <Wrapper>
      <div className="guessed-letters-container">
        {guessedLetters.map((letter, index) => {
          let isBadGuess = true;
          for (let i = 0; i < puzzleArray.length; i++) {
            if (puzzleArray[i].word.includes(letter)) {
              isBadGuess = false;
              break;
            }
          }
          return (
            <span
              className={
                isBadGuess === true ? "wrong-guessed-letter" : "guessed-letter"
              }
              key={index}
            >
              {letter}
            </span>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default GuessedLetters;
