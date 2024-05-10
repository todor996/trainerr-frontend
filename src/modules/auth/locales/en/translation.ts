import { AuthLocal } from '@modules/auth/types/AuthLocal.type';

const enResource: AuthLocal = {
  langButtonEng: 'English',
  langButtonSrb: 'Serbian',

  usernameLabel: 'Username',
  firstNameLabel: 'First Name',
  lastNameLabel: 'Last Name',
  birthdayLabel: 'Birthday',
  emailLabel: 'Email Address',
  passwordLabel: 'Password',
  passwordConfirmLabel: 'Confirm Password',

  usernamePlaceholder: 'james_bond007',
  firstNamePlaceholder: 'James',
  lastNamePlaceholder: 'Bond',
  emailPlaceholder: 'bond@trainerr.com',
  passwordPlaceholder: '**********',
  passwordConfirmPlaceholder: '**********',

  signUp: 'Sign Up',
  logIn: 'Log In',

  newPassword: 'New Password',
  confirmPassword: 'Confirm Password',
  resetPassword: 'Reset Password',

  signUpButton: 'Sign Up',
  logInButton: 'Log In',
  resetButton: 'Reset',

  langButton: {
    en: 'English',
    sr: 'Serbian',
  },

  error: {
    min: 'Minimum length is 8',
    required: 'This field is required',
    email: 'Entered value does not match email format',
    equals: 'The passwords do not match',
  },

  checkbox: {
    checkboxLabel: 'I accept',
    checkboxPrivacy: 'privacy policy',
    checkboxTerms: 'terms of use',
    checkboxAnd: '&',
  },

  account: {
    accountLabel: `You don't have an account?`,
    accountLink: 'Sign Up here',
  },

  signup: {
    loginLabel: 'You already have an account?',
    loginLink: 'Log In',
  },
};

export default enResource;
