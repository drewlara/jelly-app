import AppAppBar from './AppAppBar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as authActions } from 'modules/authentication';

const mapActionsCreators = (dispatch) => ({
  authActions: bindActionCreators(authActions, dispatch)
});

const mapStateToProps = ({ firebase }) => ({
  firebaseState: firebase
});

export default connect(mapStateToProps, mapActionsCreators)(AppAppBar);