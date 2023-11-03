import React, { useEffect, useState } from "react";
import Word from "./Word";
import { wordList } from "../utils/wordList.js";
import Wrapper from "../assets/wrappers/puzzleContainer.js";
import Hangman from "../utils/hangman";

const PuzzleContainer = ({ theme }) => {
  let randomTheme = wordList[Math.floor(Math.random() * wordList.length)];

  const randomThemedEasyWords = randomTheme.easyWords;

  let checkForDuplicates = [];

  let puzzle =
    randomThemedEasyWords[
      Math.floor(Math.random() * randomThemedEasyWords.length)
    ];
  checkForDuplicates.push(puzzle);
  let puzzle2 =
    randomThemedEasyWords[
      Math.floor(Math.random() * randomThemedEasyWords.length)
    ];
  if (checkForDuplicates.includes(puzzle2)) {
    puzzle2 =
      randomThemedEasyWords[
        Math.floor(Math.random() * randomThemedEasyWords.length)
      ];
  }
  checkForDuplicates.push(puzzle2);

  let puzzle3 =
    randomThemedEasyWords[
      Math.floor(Math.random() * randomThemedEasyWords.length)
    ];
  if (checkForDuplicates.includes(puzzle3)) {
    puzzle3 =
      randomThemedEasyWords[
        Math.floor(Math.random() * randomThemedEasyWords.length)
      ];
  }
  checkForDuplicates.push(puzzle3);

  let puzzle4 =
    randomThemedEasyWords[
      Math.floor(Math.random() * randomThemedEasyWords.length)
    ];
  if (checkForDuplicates.includes(puzzle4)) {
    puzzle4 =
      randomThemedEasyWords[
        Math.floor(Math.random() * randomThemedEasyWords.length)
      ];
  }
  checkForDuplicates.push(puzzle4);

  let hangmanGames = checkForDuplicates.map((word) => new Hangman(word, 5));

  return (
    <Wrapper className="puzzle-container">
      {hangmanGames.map((game, index) => (
        <div key={index}>
          <Word className="word" puzzle={game.puzzle} />
        </div>
      ))}
    </Wrapper>
  );
};

export default PuzzleContainer;
