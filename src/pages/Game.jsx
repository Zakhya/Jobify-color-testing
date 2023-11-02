import React from "react";
import { GameButtons, GameStats, GuessedLetters } from "../components";
import PuzzleContainer from "../components/PuzzleContainer";
import Wrapper from "../assets/wrappers/Game";

const Game = () => {
  return (
    <Wrapper>
      <GameStats />
      <PuzzleContainer />
      <GuessedLetters />
      <GameButtons />
    </Wrapper>
  );
};

export default Game;
