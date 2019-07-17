import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Grid
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  toolBarContainer: {
    
  }
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="relative" className={classes.appBarContainer}>
      <Toolbar>
        <Grid container alignItems="center" justify="space-evenly">
          <Grid item>
            <Typography variant="h6" color="inherit" noWrap>
              Jelly App
            </Typography>
          </Grid>
          <Grid item>
            <AccountCircle />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;