import { useSelector, useDispatch } from "react-redux";
import {
  fetchExampleTasks,
  selectAreTasksEmpty,
  selectLoading,
} from "../tasksSlice.js";
import {
  StyledExampleTasksButton,
  HeadingExampleTasksButton,
} from "./styled.js";

function ExampleTasksButton() {
  const dispatch = useDispatch();
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const loading = useSelector(selectLoading);

  return (
    <StyledExampleTasksButton>
      <HeadingExampleTasksButton
        onClick={() => dispatch(fetchExampleTasks())}
        disabled={!areTasksEmpty || loading}
      >
        {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
      </HeadingExampleTasksButton>
    </StyledExampleTasksButton>
  );
}

export default ExampleTasksButton;
