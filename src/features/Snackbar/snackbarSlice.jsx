import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  color: "success",
  open: false,
};

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    successSnackbar: (state, action) => ({
      message: action.payload,
      color: "success",
      open: true,
    }),
    failedSnackbar: (state, action) => ({
      message: action.payload,
      color: "error",
      open: true,
    }),
    closeSnackbar: (state) => ({
      open: false,
    }),
  },
});

// Action creators are generated for each case reducer function
export const { successSnackbar, failedSnackbar, closeSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
