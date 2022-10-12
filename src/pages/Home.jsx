import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import AppHeader from "components/AppHeader/AppHeader";
import AppSidebar from "components/Sidebar/AppSidebar";

const drawerWidth = 230;

const Home = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppHeader openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} drawerWidth={drawerWidth} />
      <AppSidebar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} drawerWidth={drawerWidth} />

      <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Home;
