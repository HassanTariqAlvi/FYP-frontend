import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Grid, Dialog, Slide } from "@mui/material";

import Button from "components/Buttons/Button";

const useStyles = makeStyles((theme) => ({
  deleteDialog: {
    paddingTop: "1em",
    paddingBottom: "1em",
    paddingLeft: "1.5em",
    paddingRight: "1.5em",
    maxWidth: "800px",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export const useDelete = (clearForm) => {
  const classes = useStyles();
  const [openDelete, setOpenDelete] = useState(false);

  const handleCancel = () => {
    setOpenDelete(false);
    clearForm();
  };

  const Delete = ({ text, destroy }) => {
    return (
      <Dialog
        open={openDelete}
        TransitionComponent={Transition}
        onClose={handleCancel}
        PaperProps={{
          className: classes.deleteDialog,
        }}
      >
        <Grid container direction="column" rowSpacing={2}>
          <Grid item>
            <Typography variant="h6">Confirm delete</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">{text}</Typography>
          </Grid>
          <Grid item container justifyContent="flex-end" columnSpacing={3}>
            <Grid item>
              <Button
                value="Yes"
                color="error"
                onClick={() => {
                  destroy();
                  setOpenDelete(false);
                }}
              />
            </Grid>
            <Grid item>
              <Button value="No" onClick={handleCancel} />
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    );
  };

  return {
    Delete,
    setOpenDelete,
  };
};
