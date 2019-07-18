import SignIn from './SignIn';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as authActions } from 'modules/authentication';

const mapActionsCreators = (dispatch) => ({
  authActions: bindActionCreators(authActions, dispatch)
});

const mapStateToProps = ({ auth, firebase }) => ({
  authState: auth,
  firebaseState: firebase
});

export default connect(mapStateToProps, mapActionsCreators)(SignIn);