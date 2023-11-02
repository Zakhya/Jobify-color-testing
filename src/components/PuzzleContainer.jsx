import React from "react";
import Word from "./Word";
import { wordList } from "../utils/wordList.js";

const PuzzleContainer = ({ theme }) => {
  console.log(wordList);

  //generate words and check for duplicates

  let randomTheme = wordList[Math.floor(Math.random() * wordList.length)];
  const randomThemedEasyWords = randomTheme.easyWords;
  console.log(randomThemedEasyWords);

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

  // game1 = new Hangman(puzzle, 5);
  // game2 = new Hangman(puzzle2, 5);
  // game3 = new Hangman(puzzle3, 5);
  // game4 = new Hangman(puzzle4, 5);

  return (
    <div
      className="puzzle-container"
      // style={{ color: theme.textColor }}
    >
      <Word puzzle={puzzle} />
      <Word puzzle={puzzle2} />
      <Word puzzle={puzzle3} />
      <Word puzzle={puzzle4} />
    </div>
  );
};

export default PuzzleContainer;
