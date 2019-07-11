import React from 'react';
import {
  Container,
  Grid,
  Typography
} from '@material-ui/core';
import Stars from '@material-ui/icons/Stars';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  featuredItemContent: {
    backgroundColor: theme.palette.background.paper
  },
  gridItem: {
    textAlign: 'center'
  }
}));

const FeaturedItem = () => {
  const classes = useStyles();
  return (
    <Container className={classes.featuredItemContent}>
      <Grid container spacing={2} alignItems="center">
        <Grid className={classes.gridItem} item xs={8}>
          <Stars />
          <Typography>
            Some featured item
          </Typography>
        </Grid>
        <Grid item xs={4}>
          insert image here
        </Grid>
      </Grid>
    </Container>
  );
}

export default FeaturedItem;