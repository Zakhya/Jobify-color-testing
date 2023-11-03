import React, { useState, useEffect } from "react";
import { GameButtons, GameStats, GuessedLetters } from "../components";
import PuzzleContainer from "../components/PuzzleContainer";
import Wrapper from "../assets/wrappers/Game";

const Game = () => {
  const [guessedLetters, setGuessedLetters] = useState([]);

  const guessLetter = (e) => {
    console.log(e.key);
    const newLetter = e.key;
    setGuessedLetters((prevGuessedLetters) => [
      ...prevGuessedLetters,
      newLetter,
    ]);
  };
  console.log(guessedLetters);

  useEffect(() => {
    window.addEventListener("keydown", guessLetter);

    return () => {
      window.removeEventListener("keydown", guessLetter);
    };
  }, []);

  return (
    <Wrapper>
      <GameStats />
      <PuzzleContainer />
      <GuessedLetters guessedLetters={guessedLetters} />
      <GameButtons />
    </Wrapper>
  );
};

export default Game;
