import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const dailyWorkPrintDataSlice = createSlice({
  name: "dailyWorkPrintData",
  initialState,
  reducers: {
    getDailyWorkData: (state, action) => action.payload,
    resetDailyWorkData: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { getDailyWorkData, resetDailyWorkData } = dailyWorkPrintDataSlice.actions;

export default dailyWorkPrintDataSlice.reducer;
