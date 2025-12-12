import { useState, useEffect } from "react";

const defaultTasks = [
  { id: 1, content: "przejść na Reacta", done: false },
  { id: 2, content: "zjeść obiad", done: true },
];

const getInitialTasks = () => {
  const tasksFromLocalStorage = localStorage.getItem("tasks");
  return tasksFromLocalStorage
    ? JSON.parse(tasksFromLocalStorage)
    : defaultTasks;
};

const hideDoneKey = "hideDone";

const getHideDoneInitialState = () => {
  const hideDoneStateFromLocalStorage = localStorage.getItem(hideDoneKey);
  if (hideDoneStateFromLocalStorage === "true") {
    return true;
  }
  return false;
};

export const useTasks = () => {
  const [tasks, setTasks] = useState(getInitialTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [hideDone, setHideDone] = useState(getHideDoneInitialState);

  useEffect(() => {
    localStorage.setItem(hideDoneKey, hideDone.toString());
  }, [hideDone]);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }

        return task;
      })
    );
  };

  const setAllDone = () => {
    setTasks((tasks) =>
      tasks.map((task) => ({
        ...task,
        done: true,
      }))
    );
  };

  const addNewTask = (newTaskContent) => {
    setTasks((tasks) => [
      ...tasks,
      {
        content: newTaskContent,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      },
    ]);
  };

  return {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
    hideDone,
    toggleHideDone,
  };
};
