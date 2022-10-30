import { createSlice } from "@reduxjs/toolkit";

const initialReducer = createSlice({
  name: "initialReducer",
  // set eventID in initialState eventID after the first page is created.
  initialState: {},
  reducers: {
    getInitialDetails() {},
    setInitialDetails(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { getInitialDetails, setInitialDetails } = initialReducer.actions;
export default initialReducer.reducer;
