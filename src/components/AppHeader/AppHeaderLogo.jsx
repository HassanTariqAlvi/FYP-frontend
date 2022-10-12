import React, { useState } from "react";
import { Button, Avatar, Menu, MenuItem } from "@mui/material";
import useAuthentication from "hooks/useAuthentication";

const AppbarMenu = () => {
  const { logout } = useAuthentication();
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const app_header_options = [{ id: 1, name: "Logout", callback: logout }];

  return (
    <>
      <Button onClick={handleClick} onClose={handleClose}>
        <Avatar sx={{ bgcolor: "white", color: "company.main" }}>U</Avatar>
      </Button>

      <Menu anchorEl={anchorEl} open={openMenu} onClose={handleClose}>
        {app_header_options.map((item) => {
          const { id, name, callback } = item;
          return (
            <MenuItem
              onClick={() => {
                handleClose();
                callback();
              }}
              key={id}
            >
              {name}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default AppbarMenu;
