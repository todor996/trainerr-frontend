import { AuthLocal } from '@modules/auth/types/AuthLocal.type';

const srResource: AuthLocal = {
  usernameLabel: 'Trenerr',
  langButtonEng: 'Engleski',
  langButtonSrb: 'Srpski',
  firstNameLabel: 'Ime',
  lastNameLabel: 'Prezime',
  birthdayLabel: 'Datum rođenja',
  emailLabel: 'E-mail adresa',
  passwordLabel: 'Lozinka',
  firstNamePlaceholder: 'Marko',
  lastNamePlaceholder: 'Markovic',
  emailPlaceholder: 'marko.markovic@trainerr.com',
  passwordPlaceholder: '**********',
  signUp: 'Registracija',
  logIn: 'Prijavite se',
  newPassword: 'Nova Lozinka',
  confirmPassword: 'Potvrdi Lozinku',
  resetButton: 'Potvrdi',
  resetPassword: 'Nova Lozinka',
  error: {
    minLength: 'Lozinka mora da sadrži najmanje 8 karaktera',
    required: 'Ovo polje je obavezno',
    pattern: 'Neodgovarajući format e-mail adrese',
    passwordsDoNotMatch: 'Lozinke se ne poklapaju',
  },
  signUpButton: 'Registruj se',
  logInButton: 'Prijavite se',
  langButton: {
    en: 'Engleski',
    sr: 'Srpski',
  },

  checkbox: {
    checkboxLabel: 'Da, prihvatam',
    checkboxPrivacy: 'politiku privatnosti',
    checkboxTerms: 'uslove korišćenja',
    checkboxAnd: 'i',
  },

  account: {
    accountLabel: 'Nemate nalog?',
    accountLink: 'Registrujte se ovde',
  },

  signup: {
    loginLabel: 'Već imate nalog?',
    loginLink: 'Prijavite se',
  },
};

export default srResource;
