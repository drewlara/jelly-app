import React from 'react';
import {
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(6),
    color: theme.palette.background.paper,
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  typography: {
    color: theme.palette.background.paper
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography className={classes.typography} variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography className={classes.typography} variant="subtitle1" align="center" color="textSecondary" component="p">
        Something here to give the footer a purpose!
      </Typography>
    </footer>
  );
}

export default Footer;