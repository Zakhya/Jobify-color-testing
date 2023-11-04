import { wordList } from "../utils/wordList.js";
import Hangman from "../utils/hangman";

export const generateRandomPuzzle = (difficulty, numberOfWords) => {
  let randomTheme = wordList[Math.floor(Math.random() * wordList.length)];
  const theme = randomTheme.theme;
  let randomThemeWords;
  if (difficulty === "easy") {
    randomThemeWords = randomTheme.easyWords;
  } else if (difficulty === "hard") {
    randomThemeWords = randomTheme.hardWords;
  }

  let uniqueWords = new Set();
  while (uniqueWords.size < numberOfWords) {
    let randomIndex = Math.floor(Math.random() * randomThemeWords.length);
    uniqueWords.add(randomThemeWords[randomIndex]);
  }

  let hangmanGames = Array.from(uniqueWords).map(
    (word) => new Hangman(word, 5)
  );
  return [hangmanGames, theme];
};
