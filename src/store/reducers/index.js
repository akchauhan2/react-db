import { combineReducers } from "@reduxjs/toolkit";
import { routerReducer } from "react-router-redux";
import initialReducer from "./initialReducer";
import playing from "./playingReducer";
const appReducer = combineReducers({
  routing: routerReducer,
  initial: initialReducer,
  playingReducer: playing,
});

const rootReducer = (state, action) => {
  if (action.type === "user/logoutUser") {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
