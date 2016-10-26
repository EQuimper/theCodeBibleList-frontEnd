import { connect } from 'react-redux';
import { registerUser } from './actions';
import SignUpView from './SignUpView';

export default connect(null, { registerUser })(SignUpView);
