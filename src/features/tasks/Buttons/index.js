import React from "react";
import { StyledButtons, HeadingButton } from "./styled.js";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) =>
  tasks.length > 0 && (
    <StyledButtons>
      <HeadingButton onClick={toggleHideDone}>
        {hideDone === false ? "Ukryj" : "Pokaż"} ukończone
      </HeadingButton>

      <HeadingButton
        onClick={setAllDone}
        disabled={tasks.every(({ done }) => done === true)}
      >
        Ukończ wszystkie
      </HeadingButton>
    </StyledButtons>
  );

export default Buttons;
