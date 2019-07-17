import React from 'react';
import {
  Container,
  Grid,
  Typography
} from '@material-ui/core';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  loginViewContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.primary.main
  },
  middleSeparator: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  verticalRule: {
    border: '1px solid',
    borderRadius: '30px',
    height: '25vh'
  },
}));

const LoginView = () => {
  const classes = useStyles();
  return (
    <Container className={classes.loginViewContent}>
      <Grid container justify="space-evenly">
        <Grid item>
          <SignIn />
        </Grid>
        <Grid item className={classes.middleSeparator}>
          <div className={classes.verticalRule}></div>
          <Typography><strong>or</strong></Typography>
          <div className={classes.verticalRule}></div>
        </Grid>
        <Grid item>
          <SignUp />
        </Grid>
      </Grid>
    </Container>
  );
}

export default LoginView;