import React from "react";
import { Button, Paper, Card as MuiCard, CardContent, Typography, CardActions, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedIndex } from "features/ListItemSelect/listItemSelectSlice";

const Card = ({ card }) => {
  const dispatch = useDispatch();
  const { id, title, path, icon } = card;
  return (
    <>
      <MuiCard sx={{ minWidth: 250, cursor: "pointer", borderLeft: "4px solid #0b5347" }} raised>
        <CardContent sx={{ paddingTop: 3 }}>
          <Grid
            container
            component={Button}
            disableRipple
            LinkComponent={Link}
            to={path}
            padding={0}
            justifyContent="flex-start"
            onClick={() => {
              dispatch(setSelectedIndex({ selectedIndex: id }));
            }}
          >
            <Grid item xs={3}>
              {icon}
            </Grid>
            <Grid item alignSelf="center">
              <Typography sx={{ fontSize: 15, fontWeight: 700 }} color="company.main" gutterBottom>
                {title}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </MuiCard>
    </>
    // <Button
    //   disableElevation
    //   LinkComponent={Link}
    //   variant="contained"
    //   to={path}
    // onClick={() => {
    //   dispatch(setSelectedIndex({ selectedIndex: id }));
    // }}
    //   sx={{
    //     py: 5,
    //     px: 10,
    //     width: { xs: "100%" },
    //     bgcolor: "#ffc600",
    //   }}
    // >
    //   {title}
    // </Button>
  );
};

export default Card;

{
  /* <Button
      disableElevation
      LinkComponent={Link}
      variant="contained"
      to={path}
      onClick={() => {
        dispatch(setSelectedIndex({ selectedIndex: id }));
      }}
      sx={{
        py: 5,
        px: 10,
        width: { xs: "100%" },
        bgcolor: "#ffc600",
      }}
    >
      {title}
    </Button> */
}
