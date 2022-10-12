import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Box,
  List,
  Drawer,
  Divider,
  Toolbar,
  Collapse,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  ListItemButton,
} from "@mui/material";
import useTheme from "@mui/styles/useTheme";
// import { sidebarData } from "./AppSidebarMenu";
import logo from "assets/Images/logo.png";
import useSidebarMenu from "hooks/useSidebarMenu";
import useSelectedIndex from "hooks/useSelectedIndex";
import { setSelectedIndex } from "features/ListItemSelect/listItemSelectSlice";

export default function AppSidebar({ openDrawer, setOpenDrawer, drawerWidth }) {
  const theme = useTheme();
  const sidebarData = useSidebarMenu();
  const selectedIndex = useSelectedIndex();
  const dispatch = useDispatch();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const SubMenu = ({ item }) => {
    const [navBar, setNavBar] = useState(false);

    return (
      <React.Fragment>
        {item?.permission ? (
          <ListItemButton
            selected={selectedIndex === item.id}
            component={item.path ? Link : undefined}
            to={item.path ? item.path : undefined}
            onClick={() => {
              if (item.subItems) {
                setNavBar(!navBar);
              }
              if (item.path) {
                setOpenDrawer(false);
                dispatch(setSelectedIndex({ selectedIndex: item.id }));
              }
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText disableTypography>{item.name}</ListItemText>
            {item.subItems && navBar ? <ExpandLess /> : item.subItems ? <ExpandMore /> : null}
          </ListItemButton>
        ) : undefined}
        {item.subItems && (
          <Collapse in={navBar}>
            <List>
              {item.subItems.map((subItem) => (
                <SubMenu item={subItem} key={subItem.id} />
              ))}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    );
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant={matchesMD ? "temporary" : "permanent"}
      anchor="left"
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
    >
      <Toolbar />
      <Divider />
      <List>
        {sidebarData.map((item) => {
          return item.type === "divider" ? (
            <React.Fragment key={item.id}>{item.icon}</React.Fragment>
          ) : (
            <SubMenu key={item.id} item={item} />
          );
        })}
      </List>
      <Box sx={{ margin: "0 auto" }}>
        <img src={logo} alt="Sidebar company logo" height={150} width={170} />
      </Box>
    </Drawer>
  );
}
