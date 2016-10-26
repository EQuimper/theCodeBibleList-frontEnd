import axios from 'axios';

export const REGISTER_USER = 'REGISTER_USER';

const URL = 'https://crossorigin.me/http://localhost:3001/signup';

export const registerUser = () => (
  (dispatch, getState) => {
    // Get the form from the state
    const form = getState().form.SignUpForm;
    // Get email and password from the values in the reducers
    const email = form.values.email;
    const password = form.values.password;
    // Create a promise for handle api POST
    const promise = new Promise((resolve, reject) => {
      axios
        .post(URL, { email, password })
        .then(res => resolve(res.body))
        .catch(err => reject(err));
    });
    // Dispatch the action and return the payload as a promise
    return dispatch({ type: REGISTER_USER, payload: promise });
  }
)
