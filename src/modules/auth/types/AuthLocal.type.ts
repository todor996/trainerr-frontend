export interface AuthLocal {
  usernameLabel: string;
  langButtonEng: string;
  langButtonSrb: string;
  firstNameLabel: string;
  lastNameLabel: string;
  birthdayLabel: string;
  emailLabel: string;
  passwordLabel: string;
  firstNamePlaceholder: string;
  lastNamePlaceholder: string;
  emailPlaceholder: string;
  passwordPlaceholder: string;
  signUp: string;
  newPassword: string;
  confirmPassword: string;
  resetButton: string;
  resetPassword: string;
  error: {
    [key: string]: string;
  };
  logIn: string;
  signUpButton: string;
  logInButton: string;
  langButton: {
    en: string;
    sr: string;
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
