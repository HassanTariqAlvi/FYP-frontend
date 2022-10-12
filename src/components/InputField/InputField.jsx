import React from "react";
import { Grid } from "@mui/material";
import InputLabel from "../InputLabel/InputLabel";

const InputField = ({ label, input, colSpan }) => (
  <Grid item container direction="column" sm={colSpan ? colSpan : 6}>
    <Grid item>
      <InputLabel>{label}</InputLabel>
    </Grid>
    <Grid item>{input}</Grid>
  </Grid>
);

export default InputField;
