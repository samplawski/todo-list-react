import { createSlice } from "@reduxjs/toolkit";

const defaultTasks = [
  { id: 1, content: "otworzyć 'Listę zadań'", done: true },
  { id: 2, content: "zaplanować zadania", done: false },
];

const getInitialTasks = () => {
  const tasksFromLocalStorage = localStorage.getItem("tasks");
  return tasksFromLocalStorage
    ? JSON.parse(tasksFromLocalStorage)
    : defaultTasks;
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getInitialTasks(),
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },

    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },

    toggleTaskDone: ({ tasks }, { payload }) => {
      const index = tasks.findIndex((task) => task.id === payload);
      tasks[index].done = !tasks[index].done;
    },

    setAllDone: (state) => {
      state.tasks.forEach((task) => {
        task.done = true;
      });
    },

    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  setAllDone,
  removeTask,
} = tasksSlice.actions;

export const selectTasksState = (state) => state.tasks; /* cały obiekt stanu "tasks": { tasks: [], hideDone: false } */
export const selectTasks = (state) => selectTasksState(state).tasks; /* tylko tablica zadań: [] */
export const selectHideDone = (state) => selectTasksState(state).hideDone; /* tylko flaga hideDone: false */
export const selectAreTasksEmpty = (state) => selectTasks(state).length === 0; /* sprawdza, czy są jakieś zadania (długość tablicy (selectTasks)) */
export const selectIsEveryTaskDone = (state) => selectTasks(state).every(({ done }) => done); /* wywołuje .every() na [] (selectTasks) - sprawdza, czy wszystkie są ukończone */

export default tasksSlice.reducer;

// console.log(
//   tasksSlice.reducer(
//     { tasks: [] },
//     addTask({
//       content: "Test",
//       done: true,
//     }),
//   ),
// );
