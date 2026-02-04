import { useSelector, useDispatch } from "react-redux";
import {
  toggleHideDone,
  setAllDone,
  selectHideDone,
  selectAreTasksEmpty,
  selectIsEveryTaskDone,
} from "../tasksSlice.js";
import { StyledButtons, HeadingButton } from "./styled.js";

function Buttons() {
  const dispatch = useDispatch();

  const hideDone = useSelector(selectHideDone);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);

  return (
    !areTasksEmpty && (
      <StyledButtons>
        <HeadingButton onClick={() => dispatch(toggleHideDone())}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </HeadingButton>

        <HeadingButton
          onClick={() => dispatch(setAllDone())}
          disabled={isEveryTaskDone}
        >
          Ukończ wszystkie
        </HeadingButton>
      </StyledButtons>
    )
  );
}

export default Buttons;
