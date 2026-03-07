import {all} from "redux-saga/effects";
import { watchFetchExmapleTasks } from "./features/tasks/tasksSaga";

export default function* rootSaga() {
    yield all([
        watchFetchExmapleTasks(),
    ]);
}