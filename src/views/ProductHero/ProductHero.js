import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from 'components/Button';
import Typography from 'components/Typography';
import ProductHeroLayout from 'views/ProductHeroLayout';

const backgroundImage =
  'https://images.unsplash.com/photo-1557347569-491cca94d9b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80';

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Jelly App Titile
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Jelly App Subtitle Content
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="#"
      >
        View Products
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Jelly App Subtitle
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
