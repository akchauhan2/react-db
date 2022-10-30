import { createSlice } from "@reduxjs/toolkit";

const playingReducer = createSlice({
  name: "playingReducer",
  // set eventID in initialState eventID after the first page is created.
  initialState: {
    playing: null,
  },
  reducers: {
    setPlaying(state, action) {
      return { ...state, playing: action.payload?.playing || action.payload };
    },
    clearPlaying() {
      return {};
    },
  },
});

export const { setPlaying, clearPlaying } = playingReducer.actions;
export default playingReducer.reducer;
