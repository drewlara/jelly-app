import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import {
  Typography,
  Snackbar,
  Button
} from 'components'

const styles = theme => ({
  root: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    display: 'flex',
  },
  cardWrapper: {
    zIndex: 1,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.warning.main,
    padding: theme.spacing(8, 3),
  },
  cardContent: {
    maxWidth: 400,
  },
  textField: {
    width: '100%',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  button: {
    width: '100%',
    marginTop: theme.spacing(5)
  },
  imagesWrapper: {
    position: 'relative',
  },
  imageDots: {
    position: 'absolute',
    top: -67,
    left: -67,
    right: 0,
    bottom: 0,
    width: '100%'
  },
  image: {
    position: 'absolute',
    top: -28,
    left: -28,
    right: 0,
    bottom: 0,
    width: '100%',
    maxWidth: 600,
  },
});

class ProductCTA extends React.Component {
  state = {
    open: false,
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Container className={classes.root} component="section">
        <Grid container>
          <Grid item xs={12} md={6} className={classes.cardWrapper}>
            <div className={classes.card}>
              <form onSubmit={this.handleSubmit} className={classes.cardContent}>
                <Typography variant="h2" component="h2" gutterBottom>
                  Featured Item
                </Typography>
                <Typography variant="h5">
                  Feature Item Description Content
                </Typography>
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  className={classes.button}
                >
                  See more
                </Button>
              </form>
            </div>
          </Grid>
          <Grid item xs={12} md={6} className={classes.imagesWrapper}>
            <Hidden smDown>
              <div className={classes.imageDots} />
              <img
                src="https://images.unsplash.com/photo-1525604885849-bb72cf86832c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2900&q=80"
                alt="featured item"
                className={classes.image}
              />
            </Hidden>
          </Grid>
        </Grid>
        <Snackbar
          open={this.state.open}
          onClose={this.handleClose}
          message="We will send you our best offers, once a week."
        />
      </Container>
    );
  }
}

ProductCTA.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCTA);
