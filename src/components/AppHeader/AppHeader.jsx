import React from "react";
import AppBar from "@mui/material/AppBar";
import logo from "assets/Images/logo.png";
import AppHeaderLogo from "./AppHeaderLogo";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Toolbar, Typography } from "@mui/material";

function AppHeader({ openDrawer, setOpenDrawer, drawerWidth }) {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{ zIndex: 1201, width: `100%`, ml: `${drawerWidth}px`, bgcolor: "company.main" }}
    >
      <Toolbar>
        <IconButton
          onClick={() => {
            setOpenDrawer(!openDrawer);
          }}
          sx={{ color: "white", display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <img src={logo} alt="Company logo" height={50} sx={{ background: "transparent" }} />
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, color: "white", fontSize: { xs: "0.8rem", sm: "1.2rem" } }}
        >
          Rubbani Brothers Industry ERP
        </Typography>
        <AppHeaderLogo />
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;
