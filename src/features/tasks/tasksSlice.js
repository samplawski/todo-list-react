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

    // "Deep Destructuring" (Głęboka destrukturyzacja)
    //  addTask: ({ tasks }, { payload: task }) => {
    //   tasks.push(task);
    // },

    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },

    toggleTaskDone: ({ tasks }, { payload }) => {
      const index = tasks.findIndex((task) => task.id === payload);
      tasks[index].done = !tasks[index].done;
    },

    // "Deep Destructuring" (Głęboka destrukturyzacja)
    // toggleTaskDone: ({ tasks }, { payload: taskId }) => {
    //   const index = tasks.findIndex(({id}) => id === taskId);
    //   tasks[index].done = !tasks[index].done;
    // },

    setAllDone: (state) => {
      state.tasks.forEach((task) => {
        task.done = true;
      });
    },

    // z pętlą for...of
    // setAllDone: ({ tasks }) => {
    //   for (const task of tasks) {
    //     task.done = true;
    //   }
    // },

    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },

    // Głęboka destrukturyzacja
    // removeTask: ({ tasks }, { payload: taskId }) => {
    //   const index = tasks.findIndex(({ id }) => id === taskId);
    //   tasks.splice(index, 1);
    // },

    // Głęboka destrukturyzacja z zabezpieczeniem przed "off-by-one"
    // removeTask: ({ tasks }, { payload: taskId }) => {
    //   const index = tasks.findIndex(({ id }) => id === taskId);
    //   if (index !== -1) {
    //     tasks.splice(index, 1);
    //   }
    // },

    fetchExampleTasks: () => {},

    setTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  setAllDone,
  removeTask,
  fetchExampleTasks,
  setTasks,
} = tasksSlice.actions;

export const selectTasksState = (state) => state.tasks; /* cały obiekt stanu "tasks": { tasks: [], hideDone: false } */

export const selectTasks = (state) => selectTasksState(state).tasks; /* tylko tablica zadań: [] */
export const selectHideDone = (state) => selectTasksState(state).hideDone; /* tylko flaga hideDone: false */
export const selectAreTasksEmpty = (state) => selectTasks(state).length === 0; /* sprawdza, czy są jakieś zadania (długość tablicy (selectTasks)) */
export const selectIsEveryTaskDone = (state) => selectTasks(state).every( ({ done }) => done); /* wywołuje .every() na [] (selectTasks) - sprawdza, czy wszystkie są ukończone */

export default tasksSlice.reducer;
