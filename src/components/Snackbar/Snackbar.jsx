import React from "react";
import { Snackbar as MuiSnackbar, Alert } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { closeSnackbar } from "../../features/Snackbar/snackbarSlice";

const Snackbar = () => {
  const dispatch = useDispatch();
  const snackbar = useSelector((state) => state.snackbar);
  return (
    <MuiSnackbar
      autoHideDuration={5000}
      disableWindowBlurListener={true}
      open={snackbar.open}
      onClose={() => dispatch(closeSnackbar())}
    >
      <Alert onClose={() => dispatch(closeSnackbar())} severity={snackbar.color} sx={{ width: "100%" }}>
        {snackbar.message}
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
