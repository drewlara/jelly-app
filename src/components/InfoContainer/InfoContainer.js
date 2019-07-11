import React from 'react';
import {
  Container,
  Grid,
  Typography
} from '@material-ui/core';
import Info from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  infoContainerContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  gridItem: {
    textAlign: 'center'
  }
}));

const InfoContainer = () => {
  const classes = useStyles();
  return (
    <Container className={classes.infoContainerContent}>
      <Grid container spacing={2} justify="space-evenly">
        <Grid className={classes.gridItem} item>
          <Info />
          <Typography variant="h6" align="center" gutterBottom>
            Content 1
          </Typography>
        </Grid>
        <Grid className={classes.gridItem}  item>
          <Info />
          <Typography variant="h6" align="center" gutterBottom>
            Content 2
          </Typography>
        </Grid>
        <Grid className={classes.gridItem}  item>
          <Info />
          <Typography variant="h6" align="center" gutterBottom>
            Content 3
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default InfoContainer;