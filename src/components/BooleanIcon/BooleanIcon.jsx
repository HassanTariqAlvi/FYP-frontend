import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const BooleanIcon = ({ status }) => {
  return status ? <CheckIcon color="success" /> : <CloseIcon color="error" />;
};

export default BooleanIcon;
