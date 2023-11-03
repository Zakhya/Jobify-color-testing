import React from "react";

const GuessedLetters = ({ guessedLetters }) => {
  return (
    <div className="guessed-letters-container">
      {guessedLetters.map((letter, index) => {
        return <span key={index}>{letter}</span>;
      })}
    </div>
  );
};

export default GuessedLetters;
