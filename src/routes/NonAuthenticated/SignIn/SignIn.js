import withRoot from 'hoc/withRoot';
// --- Post bootstrap -----
import React from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { Typography } from 'components';
import AppForm from 'views/AppForm';
import { email, required } from 'form/validation';
import RFTextField from 'form/RFTextField';
import FormButton from 'form/FormButton';
import FormFeedback from 'form/FormFeedback';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
}));

function SignIn(props) {
  const classes = useStyles();
  const { authActions, authState, fireBasestate } = props;
  const { isLoading } = authState;

  const validate = values => {
    const errors = required(['email', 'password'], values);

    if (!errors.email) {
      const emailError = email(values.email, values);
      if (emailError) {
        errors.email = email(values.email, values);
      }
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
  };

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
        <Form onSubmit={handleSubmit} subscription={{ submitting: true }} validate={validate}>
          <Field
            autoComplete="email"
            autoFocus
            component={RFTextField}
            disabled={isLoading}
            fullWidth
            label="Email"
            margin="normal"
            name="email"
            required
            size="large"
          />
          <Field
            fullWidth
            size="large"
            component={RFTextField}
            disabled={isLoading}
            required
            name="password"
            autoComplete="current-password"
            label="Password"
            type="password"
            margin="normal"
          />
          <FormSpy subscription={{ submitError: true }}>
            {({ submitError }) =>
              submitError ? (
                <FormFeedback className={classes.feedback} error>
                  {submitError}
                </FormFeedback>
              ) : null
            }
          </FormSpy>
          <FormButton
            className={classes.button}
            disabled={isLoading}
            size="large"
            color="secondary"
            fullWidth
          >
            {isLoading ? 'In progress…' : 'Sign In'}
          </FormButton>
        </Form>
        <Typography align="center">
          <Link underline="always" href="#">
            Forgot password?
          </Link>
        </Typography>
      </AppForm>
    </React.Fragment>
  );
}

export default withRoot(SignIn);
