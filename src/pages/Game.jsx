import React, { useState, useEffect } from "react";
import { GameButtons, GameStats, GuessedLetters, Word } from "../components";
import PuzzleContainer from "../components/PuzzleContainer";
import Wrapper from "../assets/wrappers/Game";
import { wordList } from "../utils/wordList.js";
import Hangman from "../utils/hangman";

const Game = () => {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [reloadEachPuzzleToggle, setReloadEachPuzzleToggle] = useState(false);
  const [puzzleArray, setPuzzleArray] = useState([]);
  const [remainingGuesses, setRemainingGuesses] = useState(10);
  const [theme, setTheme] = useState();

  console.log(puzzleArray);
  const guessLetter = (e) => {
    console.log(puzzleArray);
    const newLetter = e.key;
    setGuessedLetters((prevGuessedLetters) => [
      ...prevGuessedLetters,
      newLetter,
    ]);
    setPuzzleArray((prevPuzzleArray) => {
      return prevPuzzleArray.map((game) => {
        const updatedGame = new Hangman(game.word.join(""), 5);
        updatedGame.guessedLetters = [...game.guessedLetters, newLetter];
        updatedGame.calculateStatus();
        return updatedGame;
      });
    });
    setReloadEachPuzzleToggle((prevToggle) => !prevToggle);
  };
  console.log(guessedLetters);

  useEffect(() => {
    window.addEventListener("keydown", guessLetter);

    return () => {
      window.removeEventListener("keydown", guessLetter);
    };
  }, []);

  useEffect(() => {
    let randomTheme = wordList[Math.floor(Math.random() * wordList.length)];
    setTheme(randomTheme.theme);
    const randomThemedEasyWords = randomTheme.easyWords;

    let uniqueWords = new Set();
    while (uniqueWords.size < 4) {
      let randomIndex = Math.floor(
        Math.random() * randomThemedEasyWords.length
      );
      uniqueWords.add(randomThemedEasyWords[randomIndex]);
    }

    let hangmanGames = Array.from(uniqueWords).map(
      (word) => new Hangman(word, 5)
    );
    setPuzzleArray(hangmanGames);
  }, []);

  return (
    <Wrapper>
      <GameStats remainingGuesses={remainingGuesses} theme={theme} />
      <PuzzleContainer
        puzzleArray={puzzleArray}
        reloadEachPuzzleToggle={reloadEachPuzzleToggle}
      />
      <GuessedLetters guessedLetters={guessedLetters} />
      <div className="buttons-container">
        <button className="shop-button button">Shop</button>
        <button className="reset-button button">Reset</button>
      </div>
    </Wrapper>
  );
};

export default Game;
