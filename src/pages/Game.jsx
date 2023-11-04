import React, { useState, useEffect } from "react";
import { GameButtons, GameStats, GuessedLetters, Word } from "../components";
import PuzzleContainer from "../components/PuzzleContainer";
import Wrapper from "../assets/wrappers/Game";
import { generateRandomPuzzle } from "../utils/generatePuzzle";
import Hangman from "../utils/hangman";

const Game = () => {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [puzzleArray, setPuzzleArray] = useState([]);
  const [remainingGuesses, setRemainingGuesses] = useState(10);
  const [theme, setTheme] = useState();
  const [score, setScore] = useState(0);

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
        return prevPuzzleArray.map((game) => {
          const updatedGame = new Hangman(game.word.join(""), 5);
          updatedGame.guessedLetters = [...game.guessedLetters, newLetter];
          updatedGame.calculateStatus();
          return updatedGame;
        });
      });
    } else {
      setRemainingGuesses((prev) => prev - 1);
    }
  };

  useEffect(() => {
    let puzzleComplete = true;
    let localScore = 0;
    puzzleArray.forEach((game) => {
      game.word.forEach((letter) => {
        console.log("letterLog");
        localScore++;
      });
      console.log(game.word);
      if (game.status !== "finished") {
        puzzleComplete = false;
      }
    });
    if (puzzleComplete) {
      console.log("You Win");
      const [hangmanGames, theme] = generateRandomPuzzle("easy", 4);
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
    const [hangmanGames, theme] = generateRandomPuzzle("easy", 4);
    setPuzzleArray(hangmanGames);
    setTheme(theme);
  }, []);

  return (
    <Wrapper>
      <GameStats
        remainingGuesses={remainingGuesses}
        theme={theme}
        score={score}
      />
      {remainingGuesses < 1 && (
        <h3
          style={{
            color: "red",
            width: "100%",
            marginTop: "75px",
            marginBottom: "-75px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          You Lose!
        </h3>
      )}
      <PuzzleContainer
        puzzleArray={puzzleArray}
        remainingGuesses={remainingGuesses}
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
