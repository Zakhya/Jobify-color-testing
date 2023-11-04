import React from "react";
import Wrapper from "../assets/wrappers/GameButtons";

const GameButtons = ({ theme }) => {
  return (
    <Wrapper>
      <div className="buttons-container">
        <button className="shop-button button">Shop</button>
        <button>Reset</button>
      </div>
    </Wrapper>
  );
};

export default GameButtons;
