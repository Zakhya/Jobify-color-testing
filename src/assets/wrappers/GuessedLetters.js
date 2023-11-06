import styled from "styled-components";

const Wrapper = styled.div`
  .guessed-letter {
    color: var(--text-secondary-color);
    margin-inline: 3.5px;
  }
  .wrong-guessed-letter {
    color: red;
    margin-inline: 3.5px;
  }
  .old-guessed-letter {
    color: #d4d2d2;
    margin-inline: 3.5px;
  }
  .old-wrong-guessed-letter {
    color: #c24444;
    margin-inline: 3.5px;
  }
`;
export default Wrapper;
