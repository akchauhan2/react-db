import { all } from "redux-saga/effects";
import initialSaga from "./initialSaga";
import playingSaga from "./playingSaga";

export default function* rootSaga() {
  yield all([initialSaga()]);
  yield all([playingSaga()]);
}
