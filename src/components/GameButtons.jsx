import React from "react";

const GameButtons = ({ theme }) => {
  return (
    <div className="buttons-container">
      <button
        className="shop-button button"
        // style={{ backgroundColor: theme.color, color: theme.textColor }}
      >
        Shop
      </button>
      <button
        className="reset-button button"
        // style={{
        //   backgroundColor: theme.resetButtonBackground,
        //   color: theme.resetButtonText,
        // }}
      >
        Reset
      </button>
    </div>
  );
};

export default GameButtons;
