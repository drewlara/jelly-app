import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core';

const NavBar = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          Jelly App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;