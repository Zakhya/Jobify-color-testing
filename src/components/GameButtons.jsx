import React from "react";
import Wrapper from "../assets/wrappers/GameButtons";

const GameButtons = ({ theme }) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default GameButtons;
