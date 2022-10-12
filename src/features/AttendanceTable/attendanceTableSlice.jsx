import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Name: "-",
  Department: "-",
  In: "-",
  Out: "-",
};

export const attendanceTableSlice = createSlice({
  name: "attendanceTable",
  initialState,
  reducers: {
    getAttendanceTable: (state, action) => action.payload,
    resetAttendanceTable: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { getAttendanceTable, resetAttendanceTable } = attendanceTableSlice.actions;

export default attendanceTableSlice.reducer;
