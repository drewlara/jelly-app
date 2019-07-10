import React from 'react';
import {
  Button,
  Grid,
  Typography,
  Container

} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  }
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <main>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Title
            </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  View Products
                  </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Contact
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </main>
  );
}

export default Hero;