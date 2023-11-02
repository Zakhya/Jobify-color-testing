import React from "react";

const GameStats = () => {
  return (
    <section className="stats-container">
      <div className="level-container flex">
        <h4 className="level-text">Level:</h4>
        <h4 className="level-number">1</h4>
      </div>
      <div className="score-container flex">
        <h4 className="score-text">Score:</h4>
        <h4 className="score-number">1</h4>
      </div>
      <div className="theme-container flex">
        <h4 className="theme-text">Theme:</h4>
        <h4 className="theme-number">1</h4>
      </div>
      <div className="guesses-container flex">
        <h4 className="guesses-text">Guesses:</h4>
        <h4 className="guesses-number">1</h4>
      </div>
    </section>
  );
};

export default GameStats;
