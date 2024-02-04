export interface AuthLocal {
  langButtonEng: string;
  langButtonSrb: string;

  usernameLabel: string;
  firstNameLabel: string;
  lastNameLabel: string;
  birthdayLabel: string;
  emailLabel: string;
  passwordLabel: string;
  passwordConfirmLabel: string;

  usernamePlaceholder: string;
  firstNamePlaceholder: string;
  lastNamePlaceholder: string;
  emailPlaceholder: string;
  passwordPlaceholder: string;
  passwordConfirmPlaceholder: string;

  signUp: string;
  logIn: string;

  newPassword: string;
  confirmPassword: string;
  resetPassword: string;

  signUpButton: string;
  logInButton: string;
  resetButton: string;

  // TODO: MOve this to global translation
  langButton: {
    en: string;
    sr: string;
  };

  error: {
    [key: string]: string;
  };

  checkbox: {
    checkboxLabel: string;
    checkboxPrivacy: string;
    checkboxTerms: string;
    checkboxAnd: string;
  };

  account: {
    accountLabel: string;
    accountLink: string;
  };

  signup: {
    loginLabel: string;
    loginLink: string;
  };
}
