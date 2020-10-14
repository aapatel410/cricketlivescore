import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";

const NavBar = () => {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Live Cricket Score</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
