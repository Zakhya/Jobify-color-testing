import React from "react";
import Wrapper from "../assets/wrappers/WordContainer";

const Word = ({ game, reloadEachPuzzleToggle }) => {
  console.log(game.puzzle);
  return (
    <Wrapper>
      <div className="puzzleContainer">
        {game.puzzle.split("").map((letter, index) => {
          const uppercaseLetter = letter.toUpperCase();
          return <span key={index}>{uppercaseLetter}</span>;
        })}
      </div>
    </Wrapper>
  );
};

export default Word;
