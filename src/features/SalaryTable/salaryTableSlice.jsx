import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  "Previous loan": 0,
  "Loan deduction": 0,
  "Remaining loan": 0,
  "Total salary": 0,
  "Net Salary": 0,
};

export const salaryTableSlice = createSlice({
  name: "salaryTable",
  initialState,
  reducers: {
    getSalaryTable: (state, action) => action.payload,
    updateSalaryTable: (state, { payload }) => {
      if (payload?.is_deducted) {
        return {
          ...state,
          "Loan deduction": payload?.deducted_amount !== "" ? payload?.deducted_amount : 0,
          "Remaining loan": state["Previous loan"] - payload?.deducted_amount,
          "Net salary": payload?.total_salary - payload?.deducted_amount,
        };
      } else if (!payload?.is_deducted) {
        return {
          ...state,
          "Loan deduction": 0,
          "Remaining loan": state["Previous loan"],
          "Net salary": payload?.total_salary,
        };
      }
    },
    resetSalaryTable: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { getSalaryTable, updateSalaryTable, resetSalaryTable } = salaryTableSlice.actions;

export default salaryTableSlice.reducer;

// return {
//   ...state,
//   "Loan deduction": payload?.deducted_amount !== "" ? payload?.deducted_amount : 0,
//   "Remaining loan": state["Previous loan"] - payload?.deducted_amount,
//   "Net salary": payload?.total_salary - payload?.deducted_amount,
// };
