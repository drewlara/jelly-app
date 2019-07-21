import withRoot from 'hoc/withRoot';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { Typography, Button } from 'components';
import FormTextField from 'form/FormTextField';
import AppForm from 'views/AppForm';
import { Link as RouterLink } from 'react-router-dom';
import { Field, reduxForm, focus } from 'redux-form';
import { required } from 'form/validators';

const useStyles = makeStyles(theme => ({
  form: {
    marginTop: theme.spacing(6),
    boxSizing: 'border-box'
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white
  }
}));

const SignIn = (props) => {
  const classes = useStyles();
  const { authActions, authState, handleSubmit } = props;
  const { signIn } = authActions;
  const { isLoading } = authState;

  const onSubmit = (values) => {
    signIn(values);
  }

  return (
    <React.Fragment>
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign In
          </Typography>
          <Typography variant="body2" align="center">
            {'Not a member yet? '}
            <Link component={RouterLink} to="/signup" align="center" underline="always">
              Sign Up here
            </Link>
          </Typography>
        </React.Fragment>
        <form onSubmit={handleSubmit(values => onSubmit(values))}>
          <Field
            autoComplete="email"
            component={FormTextField}
            disabled={isLoading}
            fullWidth
            label="Email"
            margin="normal"
            name="email"
            validate={[required]}
            placeholder="Email"
          />
          <Field
            fullWidth
            component={FormTextField}
            disabled={isLoading}
            name="password"
            autoComplete="current-password"
            label="Password"
            type="password"
            margin="normal"
            validate={[required]}
            placeholder="Password"
          />
          <Button
            className={classes.button}
            disabled={isLoading || props.invalid}
            color="secondary"
            variant="contained"
            size="large"
            fullWidth
            type="submit"
          >
            {isLoading ? 'Signing In…' : 'Sign In'}
          </Button>
        </form>
        <Typography align="center">
          <Link underline="always" href="#">
            Forgot password?
          </Link>
        </Typography>
      </AppForm>
    </React.Fragment>
  );
}

const SignInComponent = withRoot(SignIn);

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('email', 'password'))
})(SignInComponent);