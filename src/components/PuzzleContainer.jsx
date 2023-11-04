import Word from "./Word";
import Wrapper from "../assets/wrappers/puzzleContainer.js";

const PuzzleContainer = ({ puzzleArray, remainingGuesses }) => {
  return (
    <Wrapper className="puzzle-container">
      {puzzleArray.map((game, index) => (
        <div key={index}>
          <Word
            className="word"
            game={game}
            remainingGuesses={remainingGuesses}
          />
        </div>
      ))}
    </Wrapper>
  );
};

export default PuzzleContainer;
