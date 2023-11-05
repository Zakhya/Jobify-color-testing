import React from "react";
import Wrapper from "../assets/wrappers/GuessedLetters";

const GuessedLetters = ({ guessedLetters, puzzleArray }) => {
  return (
    <Wrapper>
      <div className="guessed-letters-container">
        {guessedLetters.map((letter, index) => {
          let isBadGuess = true;

          outerLoop: for (const hangmanArray of puzzleArray) {
            for (const game of hangmanArray) {
              if (game.word.includes(letter)) {
                isBadGuess = false;
                break outerLoop;
              }
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
