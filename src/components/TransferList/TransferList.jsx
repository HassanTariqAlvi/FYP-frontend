import * as React from "react";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import useTransferList from "./useTransferList";

function TransferList(props) {
  const { permissions } = props;
  const {
    checked,
    allChecked,
    allowedChecked,
    handleToggle,
    handleAllLeft,
    handleAllRight,
    handleCheckedLeft,
    handleCheckedRight,
  } = useTransferList(props);

  const customList = (items) => {
    return (
      <Paper sx={{ width: 300, height: 300, overflow: "auto", mt: 3 }}>
        <List dense component="div" role="list">
          {items.map((value) => {
            return (
              <ListItem key={value} role="listitem" button onClick={handleToggle(value)}>
                <ListItemIcon>
                  <Checkbox checked={checked.indexOf(value) !== -1} tabIndex={-1} disableRipple />
                </ListItemIcon>
                <ListItemText primary={value} />
              </ListItem>
            );
          })}
          <ListItem />
        </List>
      </Paper>
    );
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>{customList(permissions?.all)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleAllRight}
            disabled={permissions?.all.length === 0}
          >
            ≫
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedRight}
            disabled={allChecked.length === 0}
          >
            &gt;
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedLeft}
            disabled={allowedChecked.length === 0}
          >
            &lt;
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleAllLeft}
            disabled={permissions?.allowed.length === 0}
          >
            ≪
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList(permissions?.allowed)}</Grid>
    </Grid>
  );
}
export default React.memo(TransferList);
