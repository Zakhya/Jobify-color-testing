import React, { useEffect, useState } from "react";
import Word from "./Word";
import Wrapper from "../assets/wrappers/puzzleContainer.js";

const PuzzleContainer = ({ puzzleArray, reloadEachPuzzleToggle }) => {
  return (
    <Wrapper className="puzzle-container">
      {puzzleArray.map((game, index) => (
        <div key={index}>
          <Word
            className="word"
            game={game}
            reloadEachPuzzleToggle={reloadEachPuzzleToggle}
          />
        </div>
      ))}
    </Wrapper>
  );
};

export default PuzzleContainer;
