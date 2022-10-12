import { Grid, Typography } from "@mui/material";
import React from "react";

const Permissions = ({ children }) => {
  return (
    <React.Fragment>
      <Grid container direction="column">
        <Grid item>
          <Typography variant="h5" sx={{ marginTop: "1.5em" }}>
            Permissions
          </Typography>
        </Grid>
        <Grid item>{children}</Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Permissions;
