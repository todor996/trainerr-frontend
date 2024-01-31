import { AuthLocal } from '@modules/auth/types/AuthLocal.type';

const enResource: AuthLocal = {
  usernameLabel: 'Trainerr',
  langButtonEng: 'English',
  langButtonSrb: 'Serbian',
  firstNameLabel: 'First Name',
  lastNameLabel: 'Last Name',
  birthdayLabel: 'Birthday',
  emailLabel: 'Email Address',
  passwordLabel: 'Password',
  firstNamePlaceholder: 'John',
  lastNamePlaceholder: 'Smith',
  emailPlaceholder: 'john@trainerr.com',
  passwordPlaceholder: '**********',
  signUp: 'Sign Up',
  logIn: 'Log In',
  signUpButton: 'Sign Up',
  newPassword: 'New Password',
  confirmPassword: 'Confirm Password',
  resetButton: 'Reset',
  resetPassword: 'Reset Password',
  error: {
    minLength: 'Minimum length is 8',
    required: 'This field is required',
    pattern: 'Entered value does not match email format',
    passwordsDoNotMatch: 'The passwords do not match',
  },
  logInButton: 'Log In',
  langButton: {
    en: 'English',
    sr: 'Serbian',
  },

  checkbox: {
    checkboxLabel: 'Yes, I accept',
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
