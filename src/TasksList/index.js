import React from "react";
import "./style.css";

const TasksList = (props) => (
    <ul className="tasksList">
        {props.tasks.map(task => (
            <li
                className={`tasksList__item ${task.done && props.hideDoneTasks ? " tasksList__item--hidden" : ""}`}
                key={task.id}>

                <button className="tasksList__button tasksList__button--toggleDone">
                    {task.done ? "✔" : ""}
                </button>

                <span className={task.done ? "tasksList__item--done" : ""}>
                    {task.content}
                </span>

                <button className="tasksList__button tasksList__button--remove">
                    🧺
                </button>

            </li>
        ))}
    </ul >
);

export default TasksList;