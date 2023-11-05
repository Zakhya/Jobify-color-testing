import React, { useState, useEffect } from "react";
import { GameButtons, GameStats, GuessedLetters, Word } from "../components";
import PuzzleContainer from "../components/PuzzleContainer";
import Wrapper from "../assets/wrappers/Game";
import { generateRandomPuzzle } from "../utils/generatePuzzle";
import Hangman from "../utils/hangman";
import { checkForCompletion } from "../utils/puzzleCompletionCheck";

const Game = () => {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [puzzleArray, setPuzzleArray] = useState([[]]);
  const [remainingGuesses, setRemainingGuesses] = useState(10);
  const [theme, setTheme] = useState();
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [totalLevelGuesses, setTotalLevelGuesses] = useState(0);
  const [levelSet, setLevelSet] = useState(0);

  const guessLetter = (e) => {
    if (remainingGuesses < 1) return;
    const newLetter = e.key;
    if (/^[a-z]$/.test(newLetter) === false) return;
    if (!guessedLetters.includes(newLetter)) {
      setGuessedLetters((prevGuessedLetters) => [
        ...prevGuessedLetters,
        newLetter,
      ]);
      setPuzzleArray((prevPuzzleArray) => {
        if (!Array.isArray(prevPuzzleArray)) {
          console.error(
            "Expected prevPuzzleArray to be an array!",
            prevPuzzleArray
          );
          return prevPuzzleArray;
        }
        return prevPuzzleArray.map((hangmanArray, index) => {
          if (index > levelSet) {
            return hangmanArray;
          }
          if (!Array.isArray(hangmanArray)) {
            console.error(
              "Expected hangmanArray to be an array!",
              hangmanArray
            );
            return hangmanArray;
          }

          console.log(hangmanArray);
          return hangmanArray.map((game) => {
            const updatedGame = new Hangman(game.word.join(""), 5);
            updatedGame.guessedLetters = [...game.guessedLetters, newLetter];
            updatedGame.calculateStatus();
            return updatedGame;
          });
        });
      });
    } else {
      setRemainingGuesses((prev) => prev - 1);
    }
    setTotalLevelGuesses((prev) => prev + 1);
  };

  const checkGuesses = (guessThreshold) => {
    const newLevelSet = Math.floor((totalLevelGuesses - 1) / guessThreshold);
    setLevelSet(newLevelSet);
  };

  useEffect(() => {
    checkGuesses(7);
  }, [totalLevelGuesses]);

  useEffect(() => {
    console.log(puzzleArray);
    let puzzleComplete, localScore;
    if (puzzleArray === ![]) {
      [puzzleComplete, localScore] = checkForCompletion(puzzleArray);
    }
    if (puzzleComplete) {
      console.log("You Win");
      let hangmanGames, theme;
      if (level === 1) {
        [hangmanGames, theme] = generateRandomPuzzle(1, 2, 2); // difficulty, reps, sets
      } else if (level === 2) {
        [hangmanGames, theme] = generateRandomPuzzle(1, 2, 2);
      }
      hangmanGames.map((game) => console.log(game));
      console.log(hangmanGames);
      setLevel((prev) => prev + 1);
      setScore((prev) => prev + localScore);
      setPuzzleArray(hangmanGames);
      setTheme(theme);
      setGuessedLetters([]);
    }
  }, [guessedLetters]);

  useEffect(() => {
    window.addEventListener("keydown", guessLetter);

    return () => {
      window.removeEventListener("keydown", guessLetter);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const [hangmanGames, theme] = generateRandomPuzzle(1, 2, 2);
    setPuzzleArray(hangmanGames);
    setTheme(theme);
  }, []);

  console.log(puzzleArray);

  return (
    <Wrapper>
      <GameStats
        remainingGuesses={remainingGuesses}
        theme={theme}
        score={score}
      />
      {remainingGuesses < 1 && <h3 className="losing-message">You Lose!</h3>}
      <PuzzleContainer
        puzzleArray={puzzleArray}
        remainingGuesses={remainingGuesses}
        totalLevelGuesses={totalLevelGuesses}
      />
      <GuessedLetters
        puzzleArray={puzzleArray}
        guessedLetters={guessedLetters}
      />
      <div className="buttons-container">
        <button className="shop-button button">Shop</button>
        <button className="reset-button button">Reset</button>
      </div>
    </Wrapper>
  );
};

export default Game;
