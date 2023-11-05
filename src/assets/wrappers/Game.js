import styled from "styled-components";

const Wrapper = styled.main`
  .header-container {
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo-text {
    font-family: "Caveat", cursive;
  }
  .logo-image {
    margin-right: 25px;
    font-size: 3.25rem;
  }
  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    font-size: 2rem;
    letter-spacing: 3.5px;
  }
  .puzzle-container {
    margin-top: 87.5px;
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .highscore-container {
    width: 20%;
    display: flex;
  }
  .highscore {
    margin-left: 10px;
  }

  .stats-container {
    width: 75%;
    margin: 0 auto;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .flex {
    display: flex;
  }
  .shop-button {
    color: var(--button-color);
  }
  .buttons-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 250px;
    width: 100%;
    margin-top: 25px;
  }
  .button {
    margin-top: 50px;
    width: 250px;
    padding: 0.4rem;
  }
  .guessed-letters-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .letter {
    margin-inline: 2px;
  }
  .word-container {
    margin-top: 50px;
  }
  .shop-button {
    background-color: var(--button-color);
    color: var(--shop-button-text-color);
  }
  .losing-message {
    color: red;
    width: 100%;
    margin-top: 75px;
    margin-bottom: -75px;
    display: flex;
    justify-content: center;
  }
`;

export default Wrapper;
