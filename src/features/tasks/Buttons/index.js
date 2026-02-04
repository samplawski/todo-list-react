import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice.js";
import { StyledButtons, HeadingButton } from "./styled.js";

function Buttons() {
  const dispatch = useDispatch();
  const { tasks, hideDone } = useSelector(selectTasks);

  return (
    tasks.length > 0 && (
      <StyledButtons>
        <HeadingButton onClick={() => dispatch(toggleHideDone())}>
          {hideDone === false ? "Ukryj" : "Pokaż"} ukończone
        </HeadingButton>

        <HeadingButton
          onClick={() => dispatch(setAllDone())}
          disabled={tasks.every(({ done }) => done === true)}
        >
          Ukończ wszystkie
        </HeadingButton>
      </StyledButtons>
    )
  );
}

export default Buttons;
