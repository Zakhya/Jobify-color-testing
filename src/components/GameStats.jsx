import React from "react";
import Wrapper from "../assets/wrappers/GameStats";

const GameStats = ({ remainingGuesses, theme, score, level }) => {
  return (
    <Wrapper>
      <section className="stats-container">
        <div className="level-container flex">
          <h4 className="level-text">Level:</h4>
          <h4 className="level-number stat-number">{level}</h4>
        </div>
        <div className="score-container flex">
          <h4 className="score-text">Score:</h4>
          <h4 className="score-number stat-number">{score}</h4>
        </div>
        <div className="theme-container flex">
          <h4 className="theme-text">Theme:</h4>
          <h4 className="theme-number stat-number">{theme}</h4>
        </div>
        <div className="guesses-container flex">
          <h4 className="guesses-text">Guesses:</h4>
          <h4 className="guesses-number stat-number">{remainingGuesses}</h4>
        </div>
      </section>
    </Wrapper>
  );
};

export default GameStats;
