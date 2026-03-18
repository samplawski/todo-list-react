import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  toggleTaskDone,
  removeTask,
  selectHideDone,
  selectTasksByQuery,
} from "../../tasksSlice.js";
import { List, Item, Content, Button, StyledLink } from "./styled.js";
import searchQueryParamName from "../searchQueryParamName.js";

function TasksList() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const dispatch = useDispatch();
  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} $hidden={task.done && hideDone}>
          <Button
            $toggleDone
            title="Zaznacz jako ukończone"
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "✔" : ""}
          </Button>

          <Content $done={task.done}>
            <StyledLink
              to={`/zadania/${task.id}`}
              title="Kliknij, aby zobaczyć szczegóły."
            >
              {task.content}
            </StyledLink>
          </Content>

          <Button $remove onClick={() => dispatch(removeTask(task.id))}>
            🧺
          </Button>
        </Item>
      ))}
    </List>
  );
}

export default TasksList;
