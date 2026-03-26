import {
  takeEvery,
  call,
  put,
  delay,
  takeLatest,
  select,
} from "redux-saga/effects";
import { nanoid } from "@reduxjs/toolkit";
import {
  addTask,
  fetchExampleTasks,
  removeAllTasks,
  removeTask,
  selectTasks,
  setAllDone,
  setTasks,
  toggleTaskDone,
} from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExmapleTasksHandler() {
  try {
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    const tasksWithNewIds = exampleTasks.map((task) => ({
      ...task,
      id: nanoid(),
    }));

    yield put(setTasks(tasksWithNewIds));
  } catch (error) {
    yield call(alert, "Coś poszło nie tak!");
    yield put(setTasks([]));
  }
}

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExmapleTasksHandler);
  yield takeEvery(
    [
      addTask.type,
      removeAllTasks.type,
      removeTask.type,
      setAllDone.type,
      setTasks.type,
      toggleTaskDone.type,
    ],
    saveTasksInLocalStorageHandler,
  );
}
