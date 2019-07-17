import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Typography from 'components/Typography';
import { InsertEmoticon } from '@material-ui/icons'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(9),
    marginBottom: theme.spacing(9),
  },
  button: {
    border: '4px solid currentColor',
    borderRadius: 0,
    height: 'auto',
    padding: theme.spacing(2, 5),
  },
  link: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  buoy: {
    width: 60,
  },
  icon: {
    height: '70px',
    width: '70px'
  }
});

function ProductSmokingHero(props) {
  const { classes } = props;

  return (
    <Container className={classes.root} component="section">
      <Button className={classes.button}>
        <Typography variant="h4" component="span">
          Got any questions? Need help?
        </Typography>
      </Button>
      <Typography variant="subtitle1" className={classes.link}>
        We are here to help. Get in touch!
      </Typography>
      <InsertEmoticon className={classes.icon} />
    </Container>
  );
}

ProductSmokingHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductSmokingHero);
