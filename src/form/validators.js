import passwordValidator from 'password-validator';

/* regex */
const EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/* validators */
export const required = (value) =>
  (value ? undefined : 'Required');

export const email = (value) =>
  (EMAIL.test(value) ? undefined : 'Invalid Email');

export const isTrimmed = (value) =>
  value.trim() === value ? undefined : 'Cannot contain whitespace';

function matchesComplexity(value) {
  const minMaxLength = new passwordValidator();
  const requiredChars = new passwordValidator();

  minMaxLength
    .is().min(8)
    .is().max(50);

  const minMaxValidation = minMaxLength.validate(value, { list: true });

  if (minMaxValidation.length > 0) {
    const error = minMaxValidation[0];
    return error === 'min'
      ? 'Must be at least 8 characters in length.'
      : 'Must be between 8 - 50 characters in length.';
  }

  requiredChars
    .has().uppercase()
    .has().lowercase()
    .has().digits()
    .has().symbols();

  const requiredCharsValidation = requiredChars.validate(value, { list: true });

  if (requiredCharsValidation.length > 1) {
    return 'Passwords must include at least 3 of the following: lowercase character, uppercase character, number, special character.';
  }

  return undefined;
}

export const passwordComplexity = (value) =>
  matchesComplexity(value);

export const passwordsMatch = (value, allValues) => 
  value !== allValues.password ? 'Passwords don\'t match' : undefined;