import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from 'components/AppBar';
import Toolbar from 'components/Toolbar';
import { styles as toolbarStyles } from 'components/Toolbar/Toolbar'
import { Link as RouterLink } from 'react-router-dom';

const styles = theme => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
    cursor: 'pointer'
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

const AppAppBar = (props) => {
  const { classes, firebaseState, authActions } = props;

  const signOut = () => {
    return authActions.signOut();
  }

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            component={RouterLink}
            to="/"
          >
            {'jellyapp'}
          </Link>
          <div className={classes.right}>
            {!firebaseState.auth.uid &&
              <React.Fragment>
                <Link
                  color="inherit"
                  variant="h6"
                  underline="none"
                  className={classes.rightLink}
                  component={RouterLink}
                  to="/signin"
                >
                  {'Sign In'}
                </Link>
                <Link
                  variant="h6"
                  underline="none"
                  className={clsx(classes.rightLink, classes.linkSecondary)}
                  component={RouterLink}
                  to="/signup"
                >
                  {'Sign Up'}
                </Link>
              </React.Fragment>
            }
            {!!firebaseState.auth.uid &&
              <React.Fragment>
                <Link
                  color="inherit"
                  variant="h6"
                  underline="none"
                  className={classes.rightLink}
                  onClick={signOut}
                >
                  {'Sign Out'}
                </Link>
              </React.Fragment>
            }
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
