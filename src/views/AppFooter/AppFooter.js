import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import {
  Typography
} from 'components';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  list: {
    margin: 0,
    listStyle: 'none',
    paddingLeft: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  title: {
    color: theme.palette.secondary.main
  },
  link: {
    color: theme.palette.common.white
  }
}));


export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={2}>
              <Typography className={classes.title} variant="h6" marked="left" gutterBottom>
                About
              </Typography>
              <ul className={classes.list}>
                <li className={classes.listItem}>
                  <Link className={classes.link} href="#">Terms</Link>
                </li>
                <li className={classes.listItem}>
                  <Link className={classes.link} href="#">Privacy</Link>
                </li>
              </ul>
            </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={2}
            >
              <Grid item>© 2019 JellyApp</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
