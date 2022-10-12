import React from "react";
import useAuth from "hooks/useAuth";
import { Grid, Typography, Paper, Divider } from "@mui/material";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let current_date = new Date();
current_date = `${monthNames[current_date.getMonth()]} ${current_date.getDate()}, ${current_date.getFullYear()}`;

const RowContent = ({ label, value }) => {
  return (
    <Grid container>
      <Grid item xs={12} sm={2.5}>
        <Typography variant="body2" fontWeight={700}>
          {label}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">{value}</Typography>
      </Grid>
    </Grid>
  );
};

const FormTemplate = ({ topHeading, saveButton, backButton, children }) => {
  const { auth } = useAuth();
  return (
    <React.Fragment>
      <Paper variant="outlined" component={Grid} container direction="column" p={3} mt={0} rowGap={3}>
        <Grid item textAlign="center">
          {topHeading}
        </Grid>
        <Grid item>
          <RowContent label="Date:" value={current_date} />
        </Grid>
        <Grid item>
          <RowContent label="Created by:" value={auth?.user} />
        </Grid>
        <Divider />

        {children}

        <Grid item container justifyContent="space-between">
          <Grid item>{backButton}</Grid>
          <Grid item>{saveButton}</Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
};

export default FormTemplate;
