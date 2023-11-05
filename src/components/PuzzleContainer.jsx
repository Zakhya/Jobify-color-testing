import Word from "./Word";
import Wrapper from "../assets/wrappers/puzzleContainer.js";

const PuzzleContainer = ({
  puzzleArray,
  remainingGuesses,
  totalLevelGuesses,
}) => {
  // If we're on the second element and totalLevelGuesses > 7, render it
  console.log("totalLevelGuesses", totalLevelGuesses);
  puzzleArray.map((hangmanArray) =>
    hangmanArray.map((game) => console.log(game))
  );
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
        // For elements beyond the second, or if totalLevelGuesses <= 7, render nothing
        return null;
      })}
    </Wrapper>
  );
};

export default PuzzleContainer;
