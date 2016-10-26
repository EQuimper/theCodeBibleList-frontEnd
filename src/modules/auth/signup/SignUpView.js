import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Paper from 'material-ui/Paper';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import { validate } from '../validations/SignUpValidations';
import './style.css';

const styles = {
  paper: {
    marginTop: '20%',
    padding: '0 1%',
    height: 500
  }
}

// TODO: Make the signup form responsive
// TODO: See if can clean the component

const SignUpView = ({ handleSubmit, pristine, reset, submitting, registerUser }) => (
  <div className="SignUp-root">
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <Paper style={styles.paper} zDepth={4}>
          <form className="row SignUp-papperWrapper" onSubmit={handleSubmit(registerUser)}>
            <div className="col-md-12 Signup-form-header">
              <h3>Register a new account it's free.</h3>
            </div>
            <div className="Signup-paperContainer">
              <div className="col-md-12">
                <Field
                  name="email"
                  component={TextField}
                  floatingLabelText="Email Address"
                  hintText="user@gmail.com"
                  type="email"
                  fullWidth
                />
                <Field
                  name="password"
                  component={TextField}
                  floatingLabelText="Password"
                  hintText="password123"
                  type="password"
                  fullWidth
                />
                <Field
                  name="confirmPassword"
                  component={TextField}
                  floatingLabelText="Confirm Your Password"
                  hintText="password123"
                  type="password"
                  fullWidth
                />
              </div>
            </div>
            <div className="SignUp-linkAccount">
              <a href="#">I have already an account!</a>
            </div>
            <div className="SignUp-buttonContainer">
              <RaisedButton type="submit" disabled={pristine || submitting} label="Sign Up" primary />
            </div>
          </form>
        </Paper>
      </div>
    </div>
  </div>
);

export default reduxForm({
  form: 'SignUpForm',
  validate
})(SignUpView);
