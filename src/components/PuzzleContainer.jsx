import Word from "./Word";
import Wrapper from "../assets/wrappers/puzzleContainer.js";

const PuzzleContainer = ({
  puzzleArray,
  remainingGuesses,
  totalLevelGuesses,
  levelSet,
}) => {
  return (
    <Wrapper className="puzzle-container">
      {puzzleArray.map((hangmanArray, hangmanArrayIndex) => {
        if (hangmanArrayIndex <= levelSet) {
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
