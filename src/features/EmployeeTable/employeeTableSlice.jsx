import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Name: "-",
  Department: "-",
  CNIC: "-",
  "Phone no": "-",
};

export const employeeTableSlice = createSlice({
  name: "employeeTable",
  initialState,
  reducers: {
    getEmployeeTable: (state, action) => action.payload,
    resetEmployeeTable: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { getEmployeeTable, resetEmployeeTable } = employeeTableSlice.actions;

export default employeeTableSlice.reducer;
