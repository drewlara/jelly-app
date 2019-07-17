import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from 'components/Typography';
import productCurvyLines from 'assets/productCurvyLines.png';
import {
  HomeOutlined,
  Star,
  SendOutlined
} from '@material-ui/icons';

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
    height: '50vh'
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  icon: {
    height: '70px',
    width: '70px',
    zIndex: '1000'
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    color: theme.palette.secondary.main
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src={productCurvyLines}
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <Star className={classes.icon} />
              <Typography variant="h6" className={classes.title}>
                Always Fresh Ingregients
              </Typography>
              <Typography variant="h5">
                {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <HomeOutlined className={classes.icon} />
              <Typography variant="h6" className={classes.title}>
                Home Made
              </Typography>
              <Typography variant="h5">
                {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <SendOutlined className={classes.icon} />
              <Typography variant="h6" className={classes.title}>
                Delivered Straight To You
              </Typography>
              <Typography variant="h5">
                {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
