import React from "react";
import Wrapper from "../assets/wrappers/WordContainer";

const Word = ({ game, remainingGuesses }) => {
  return (
    <Wrapper>
      <div className="puzzleContainer">
        {remainingGuesses > 0
          ? game.puzzle.split("").map((letter, index) => {
              const uppercaseLetter = letter.toUpperCase();
              return <span key={index}>{uppercaseLetter}</span>;
            })
          : game.word.map((letter, index) => {
              const uppercaseLetter = letter.toUpperCase();
              return (
                <span
                  key={index}
                  style={{ color: "red", borderBottomColor: "red" }}
                >
                  {uppercaseLetter}
                </span>
              );
            })}
      </div>
    </Wrapper>
  );
};

export default Word;
