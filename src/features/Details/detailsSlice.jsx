import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    getDetails: (state, action) => action.payload,
    resetDetails: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { getDetails, resetDetails } = detailsSlice.actions;

export default detailsSlice.reducer;
