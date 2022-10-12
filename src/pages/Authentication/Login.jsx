import React from "react";
import { makeStyles } from "@mui/styles";

import Button from "components/Buttons/Button";
import Snackbar from "components/Snackbar/Snackbar";
import useAuthentication from "hooks/useAuthentication";
import { TextField, Typography, Grid } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  button: {
    "&.MuiButton-root": {
      backgroundColor: "#FFBA60",
    },
  },
}));

const Login = () => {
  const classes = useStyles();
  const { login, errors, details, onChange } = useAuthentication();
  return (
    <React.Fragment>
      <Grid container sx={{ width: "100vw", height: "100vh" }}>
        <Grid
          item
          xs={2}
          sx={{
            backgroundColor: "#0b5347",
            minHeight: { xs: "0", sm: "100vh" },
            display: { xs: "none", sm: "inherit" },
          }}
        />
        <Grid item sm={10} container direction="column" justifyContent="center" alignContent="center" rowSpacing={3}>
          <Grid item>
            <Typography
              variant="h4"
              color="#0b5347"
              textAlign="center"
              sx={{ fontSize: { xs: "1.7rem", sm: "2.125rem" } }}
            >
              Rubbani Brothers Industry
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              variant="standard"
              label="Username"
              name="username"
              helperText={errors?.username}
              value={details?.username ?? ""}
              onChange={onChange}
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              type="password"
              name="password"
              label="Password"
              variant="standard"
              helperText={errors?.password}
              value={details?.password ?? ""}
              onChange={onChange}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              value="Login"
              onClick={login}
              sx={{ width: "100%", backgroundColor: "#FFBA60" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Snackbar />
    </React.Fragment>
  );
};

export default Login;
