import React from 'react';
import { TextField } from 'components';

const FormTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    helperText={touched ? error : ''}
    error={!!error}
    {...input}
    {...custom}
  />
)

export default FormTextField;