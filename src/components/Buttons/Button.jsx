import { Button as MuiButton } from "@mui/material";
import React from "react";

const Button = (props) => {
  const { value, ...others } = props;
  return (
    <MuiButton disableElevation variant="contained" {...others}>
      {value}
    </MuiButton>
  );
};

export default Button;
