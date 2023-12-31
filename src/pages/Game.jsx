import React, { useState, useEffect, useCallback } from "react";
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
  const [remainingGuesses, setRemainingGuesses] = useState(20);
  const [theme, setTheme] = useState();
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [totalLevelGuesses, setTotalLevelGuesses] = useState(0);
  const [levelSet, setLevelSet] = useState(0);
  const [revealThreshold, setRevealThreshold] = useState(1);
  let guessesUntilNextSet =
    revealThreshold - (totalLevelGuesses % revealThreshold);

  // console.log("guessedLetters", guessedLetters);
  // console.log("puzzleArray", puzzleArray);
  // console.log("remainingGuesses", remainingGuesses);
  // console.log("theme", theme);
  // console.log("score", score);
  // console.log("level", level);
  // console.log("totalLevelGuesses", totalLevelGuesses);
  console.log("levelSet", levelSet);
  console.log("puzzleArray.length", puzzleArray.length);

  const guessLetter = useCallback((e) => {
    if (remainingGuesses < 1) return;
    const newLetter = e.key;
    if (/^[a-z]$/.test(newLetter) === false) return;

    const isAlreadyGuessedThisSet = guessedLetters.some(
      (guess) => guess.letter === newLetter && guess.set === levelSet
    );
    if (isAlreadyGuessedThisSet) return;

    const isAlreadyGuessedInPrevSets = guessedLetters.some(
      (guess) => guess.letter === newLetter && guess.set < levelSet
    );

    let isBadGuess = true;
    let isInCurrentOrPrevSet = false;

    outerLoop: for (let i = 0; i <= levelSet; i++) {
      for (const game of puzzleArray[i]) {
        if (game.word.includes(newLetter)) {
          isInCurrentOrPrevSet = true;
          if (i === levelSet) {
            isBadGuess = false;
            break outerLoop;
          }
          if (!isAlreadyGuessedInPrevSets) {
            isBadGuess = false;
            break outerLoop;
          }
        }
      }
    }

    if (isAlreadyGuessedInPrevSets && !isInCurrentOrPrevSet) {
      isBadGuess = true;
    }
    setGuessedLetters((prevGuessedLetters) => [
      ...prevGuessedLetters,
      { letter: newLetter, set: levelSet, isBadGuess: isBadGuess },
    ]);
    setPuzzleArray((prevPuzzleArray) => {
      return prevPuzzleArray.map((hangmanArray, index) => {
        if (index > levelSet) {
          return hangmanArray;
        }
        return hangmanArray.map((game) => {
          const updatedGame = new Hangman(game.word.join(""), index);
          updatedGame.guessedLetters = [...game.guessedLetters, newLetter];
          updatedGame.calculateStatus();
          return updatedGame;
        });
      });
    });
    if (isBadGuess) {
      setRemainingGuesses((prev) => prev - 1);
    }
    setTotalLevelGuesses((prev) => prev + 1);
  });

  const checkGuesses = (guessThreshold) => {
    let index = 0;
    puzzleArray.map((el) => {
      index++;
    });
    const newLevelSet = Math.floor(totalLevelGuesses / guessThreshold);
    if (newLevelSet < index) {
      setLevelSet(newLevelSet);
    }
  };

  useEffect(() => {
    checkGuesses(revealThreshold);
  }, [totalLevelGuesses]);

  useEffect(() => {
    const [hangmanGames, theme] = generateRandomPuzzle(1, 1, 3);
    setPuzzleArray(hangmanGames);
    setTheme(theme);
  }, []);

  useEffect(() => {
    let puzzleComplete, localScore;
    if (puzzleArray.length > 0 && puzzleArray[0].length > 0) {
      [puzzleComplete, localScore] = checkForCompletion(puzzleArray);
    } else {
      puzzleComplete = false;
    }
    if (puzzleComplete === true) {
      console.log("You Win");
      let hangmanGames, theme;
      if (level === 1) {
        [hangmanGames, theme] = generateRandomPuzzle(1, 1, 4); // difficulty, reps, sets
        setLevelSet(0);
        setTotalLevelGuesses(0);
        setRevealThreshold(1);
        setLevel((prev) => prev + 1);
      } else if (level === 2) {
        [hangmanGames, theme] = generateRandomPuzzle(1, 1, 3);
        setLevelSet(0);
        setTotalLevelGuesses(0);
        setRevealThreshold(2);
        setLevel((prev) => prev + 1);
      } else if (level === 3) {
        [hangmanGames, theme] = generateRandomPuzzle(1, 2, 2);
        setLevelSet(0);
        setTotalLevelGuesses(0);
        setRevealThreshold(3);
        setLevel((prev) => prev + 1);
      }
      setScore((prev) => prev + localScore);
      setPuzzleArray(hangmanGames);
      setTheme(theme);
      setGuessedLetters([]);
    }
  }, [guessedLetters]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      guessLetter(e);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [guessLetter]);

  return (
    <Wrapper>
      <GameStats
        remainingGuesses={remainingGuesses}
        theme={theme}
        score={score}
        level={level}
      />
      {remainingGuesses < 1 ? (
        <h3 className="losing-message">You Lose!</h3>
      ) : levelSet + 1 === puzzleArray.length ? (
        <h4 className="next-set-warning">Next Set In:-</h4>
      ) : (
        <h4 className="next-set-warning">Next Set In: {guessesUntilNextSet}</h4>
      )}
      <PuzzleContainer
        levelSet={levelSet}
        puzzleArray={puzzleArray}
        remainingGuesses={remainingGuesses}
        totalLevelGuesses={totalLevelGuesses}
      />
      <GuessedLetters
        levelSet={levelSet}
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
