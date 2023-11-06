import Word from "./Word";
import Wrapper from "../assets/wrappers/puzzleContainer.js";

const PuzzleContainer = ({
  puzzleArray,
  remainingGuesses,
  totalLevelGuesses,
}) => {
  return (
    <Wrapper className="puzzle-container">
      {puzzleArray.map((hangmanArray, hangmanArrayIndex) => {
        if (hangmanArrayIndex === 0) {
          return hangmanArray.map((game, index) => (
            <div key={`hangman-set-${hangmanArrayIndex}-game-${index}`}>
              <Word
                className="word"
                game={game}
                remainingGuesses={remainingGuesses}
              />
            </div>
          ));
        } else if (hangmanArrayIndex === 1 && totalLevelGuesses > 7) {
          return hangmanArray.map((game, index) => (
            <div key={`hangman-set-${hangmanArrayIndex}-game-${index}`}>
              <Word
                className="word"
                game={game}
                remainingGuesses={remainingGuesses}
              />
            </div>
          ));
        }
        return null;
      })}
    </Wrapper>
  );
};

export default PuzzleContainer;
