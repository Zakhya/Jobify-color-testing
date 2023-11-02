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

  .highscore-container {
    width: 20%;
    display: flex;
  }
  .highscore {
    margin-left: 10px;
  }
  .puzzle-container {
    margin-top: 150px;
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .stats-container {
    width: 75%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .flex {
    display: flex;
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
`;

export default Wrapper;
