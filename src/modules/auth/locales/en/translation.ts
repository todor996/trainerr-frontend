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
  emailPlaceholder: 'john.smith@trainerr.com',
  passwordPlaceholder: '**********',
  signUp: 'Sign Up',
  logIn: 'Log In',
  signUpButton: 'Sign Up',
  error: {
    minLength: 'Minimum length is 8',
    required: 'This field is required',
  },
  logInButton: 'Log In',
  langButton: {
    en: 'English',
    sr: 'Serbian',
  },
};

export default enResource;
