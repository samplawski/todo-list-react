import { useSelector, useDispatch } from "react-redux";
import {
  selectTasks,
  toggleTaskDone,
  removeTask,
  selectHideDone,
} from "../tasksSlice.js";
import { List, Item, Content, Button } from "./styled.js";

function TasksList() {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} $hidden={task.done && hideDone}>
          <Button $toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </Button>

          <Content $done={task.done}>{task.content}</Content>

          <Button $remove onClick={() => dispatch(removeTask(task.id))}>
            🧺
          </Button>
        </Item>
      ))}
    </List>
  );
}

export default TasksList;
