import withRoot from 'hoc/withRoot';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Typography, Button } from 'components';
import AppForm from 'views/AppForm';
import FormTextField from 'form/FormTextField';
import { Link as RouterLink } from 'react-router-dom';
import { Field, reduxForm, focus } from 'redux-form';
import { required, isTrimmed, email, passwordComplexity, passwordsMatch} from 'form/validators';

const useStyles = makeStyles(theme => ({
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white
  }
}));

const SignUp = (props) => {
  const classes = useStyles();
  const { authActions, authState, handleSubmit } = props;
  const { signUp } = authActions;
  const { isLoading } = authState;

  const onSubmit = (values) => {
    signUp(values);
  };

  return (
    <React.Fragment>
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign Up
          </Typography>
          <Typography variant="body2" align="center">
            <Link component={RouterLink} to="/signin" underline="always">
              Already have an account?
            </Link>
          </Typography>
        </React.Fragment>
        <form onSubmit={handleSubmit(values => onSubmit(values))} className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Field
                component={FormTextField}
                autoComplete="fname"
                fullWidth
                placeholder="First name"
                name="firstName"
                validate={[required, isTrimmed]}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                component={FormTextField}
                autoComplete="lname"
                fullWidth
                placeholder="Last name"
                name="lastName"
                validate={[required, isTrimmed]}
              />
            </Grid>
          </Grid>
          <Field
            autoComplete="email"
            component={FormTextField}
            disabled={isLoading}
            fullWidth
            placeholder="Email"
            margin="normal"
            name="email"
            validate={[required, email]}
          />
          <Field
            fullWidth
            component={FormTextField}
            disabled={isLoading}
            name="password"
            autoComplete="current-password"
            placeholder="Password"
            type="password"
            margin="normal"
            validate={[required, passwordComplexity]}
          />
          <Field
            fullWidth
            component={FormTextField}
            disabled={isLoading}
            name="passwordConfirmation"
            placeholder="Confirm Password"
            type="password"
            margin="normal"
            validate={[required, passwordsMatch]}
          />
          <Button
            className={classes.button}
            disabled={isLoading || props.invalid}
            color="secondary"
            variant="contained"
            fullWidth
            type="submit"
          >
            {isLoading ? 'Creating Account…' : 'Sign Up'}
          </Button>
        </form>
      </AppForm>
    </React.Fragment>
  );
}

const SignUpComponent = withRoot(SignUp);

export default reduxForm({
  form: 'signup',
  onSubmitFail: (errors, dispatch) => dispatch(focus('email', 'password'))
})(SignUpComponent);