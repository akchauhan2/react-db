import { call, put, takeLatest } from "redux-saga/effects";
import {
  getInitialDetails,
  setInitialDetails,
} from "../reducers/initialReducer";
import { postCall } from "../../utils/apiSignature";
import { endPoint, env } from "../../utils/constants";

function* getInitialDetailsWorker(action) {
  try {
    const { response, error } = yield call(
      postCall,
      `${env.baseURL}${endPoint.fetchDetails}`,

      action.payload
    );

    if (response?.data) {
      console.log("success=>", response.data);
      yield put(setInitialDetails(response.data));
    } else if (error) {
      console.log("failed with message=>", error);
    } else {
      console.log("failed=>", response);
    }
  } catch (err) {
    console.log("failed=>", err);
  }
}

export default function* initialDetailWatcher() {
  yield takeLatest(getInitialDetails.type, getInitialDetailsWorker);
}
