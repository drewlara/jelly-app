import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default () => Component => {
  function RequiresAuth(props) {
    const { authenticating, loggedIn, error, ...passThroughProps } = props;
    if (authenticating) {
      return <div>Logging in...</div>;
    } else if (!loggedIn || error) {
      return <Redirect to="/" />;
    }

    return <Component {...passThroughProps} />;
  }

  const mapStateToProps = (state) => ({
    authenticating: state.auth.loading,
    loggedIn: !!state.firebase.auth.uid,
    error: state.auth.error
  });

  return connect(mapStateToProps)(RequiresAuth);
};