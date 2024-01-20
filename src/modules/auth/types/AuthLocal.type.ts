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
}
