import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  "Previous loan": "-",
  Eligible: "-",
};

export const loanTableSlice = createSlice({
  name: "loanTable",
  initialState,
  reducers: {
    getLoanTable: (state, action) => action.payload,
    resetLoanTable: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { getLoanTable, resetLoanTable } = loanTableSlice.actions;

export default loanTableSlice.reducer;
