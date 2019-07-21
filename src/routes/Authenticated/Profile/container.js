import Profile from './Profile';
import { connect } from 'react-redux';
import requiresAuth from 'hoc/requiresAuth';

const mapStateToProps = ({ firebase }) => ({
  firebaseState: firebase
});

export default requiresAuth()(connect(mapStateToProps)(Profile));