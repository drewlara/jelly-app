const ERROR_CODES = {
  'auth/invalid-email': 'Error: Invalid Email Address.',
  'auth/user-not-found': 'Error: Invalid email or password.',
  'auth/wrong-password': 'Error: Invalid email or password.',
  'auth/network-request-failed': 'Error: Connection timed out.',
  'auth/too-many-requests': 'Error: Too many requests.',
  'auth/user-token-expired': 'Error: Session expired, please log back in.',
  'auth/email-already-in-use': 'Error: The email provided is already in use.'
}

const codeToMsg = (err) => (
  ERROR_CODES[err.code] ? ERROR_CODES[err.code] : 'Something went wrong'
)

export default codeToMsg;