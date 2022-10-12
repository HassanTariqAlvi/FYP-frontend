import React from "react";
import Button from "./Button";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  saveButton: {
    "&.MuiButton-root": {
      backgroundColor: "#FFAE0D",
      "&:hover": {
        backgroundColor: theme.palette.secondary.light,
      },
    },
  },
}));

const SaveButton = (props) => {
  const classes = useStyles();
  return <Button className={classes.saveButton} {...props} />;
};

export default SaveButton;
