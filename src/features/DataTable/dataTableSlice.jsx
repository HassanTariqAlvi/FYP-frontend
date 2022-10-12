import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const dataTableSlice = createSlice({
  name: "dataTable",
  initialState,
  reducers: {
    setDataTable: (state, action) => action.payload,
    resetDataTable: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { setDataTable, resetDataTable } = dataTableSlice.actions;

export default dataTableSlice.reducer;
