export const validate = values => {
  const errors = {}
  const requiredFields = ['email', 'password', 'confirmPassword']
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (!values.password) {
    errors.password = 'Required!';
  } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/i.test(values.password)) {
    errors.password = 'Your password must have 1 number and 6 characters!';
  }
  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Your password don\'t match';
  }
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Your email address is invalid!'
  }
  return errors
}
