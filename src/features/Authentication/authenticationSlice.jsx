import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setAuth: (state, action) => action.payload,
  },
});

// Action creators are generated for each case reducer function
export const { setAuth } = authenticationSlice.actions;

export default authenticationSlice.reducer;
