import { wordList } from "../utils/wordList.js";
import Hangman from "../utils/hangman";

export const generateRandomPuzzle = (difficulty, reps, sets) => {
  let randomTheme = wordList[Math.floor(Math.random() * wordList.length)];
  const theme = randomTheme.theme;
  let randomThemeWords, hangmanGames;
  if (difficulty === 1) {
    randomThemeWords = randomTheme.easyWords;
  } else if (difficulty === 10) {
    randomThemeWords = randomTheme.hardWords;
  }

  let uniqueWords = new Set();
  while (uniqueWords.size < reps * sets) {
    let randomIndex = Math.floor(Math.random() * randomThemeWords.length);
    uniqueWords.add(randomThemeWords[randomIndex]);
  }
  const createHangmanSet = (_reps, _sets) => {
    hangmanGames = [];
    let wordsArray = Array.from(uniqueWords);
    let index = 0;
    for (let i = 0; i < _sets; i++) {
      let hangmanGameSet = [];
      for (let j = 0; j < _reps; j++) {
        if (index < wordsArray.length) {
          const word = wordsArray[index++];
          const hangmanGame = new Hangman(word, 5);
          hangmanGameSet.push(hangmanGame);
        }
      }
      hangmanGames.push(hangmanGameSet);
    }
  };

  createHangmanSet(reps, sets);

  return [hangmanGames, theme];
};
