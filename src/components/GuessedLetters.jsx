import React from "react";
import Wrapper from "../assets/wrappers/GuessedLetters";

const GuessedLetters = ({ guessedLetters }) => {
  return (
    <Wrapper>
      <div className="guessed-letters-container">
        {guessedLetters.map((letter, index) => {
          return (
            <span className="guessed-letter" key={index}>
              {letter}
            </span>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default GuessedLetters;
