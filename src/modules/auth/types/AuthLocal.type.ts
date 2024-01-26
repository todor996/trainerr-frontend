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
  checkBoxString: string;
  checkBoxPrivacy: string;
  checkBoxTerms: string;
  checkBoxAnd: string;

  accountString: string;
  accountLink: string;

  haveAccString: string;
  haveAccLink: string;
}
