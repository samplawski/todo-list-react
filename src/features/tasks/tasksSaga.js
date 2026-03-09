import {
  takeEvery,
  call,
  put,
  delay,
  takeLatest,
  select,
} from "redux-saga/effects";
import { nanoid } from "@reduxjs/toolkit";
import { fetchExampleTasks, selectTasks, setTasks } from "./tasksSlice";
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
  }
}

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  console.log("Saga jest podłączona.");
  yield takeLatest(fetchExampleTasks.type, fetchExmapleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}
