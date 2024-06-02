import { AuthLocal } from '@modules/auth/types/AuthLocal.type';

const srResource: AuthLocal = {
  langButtonEng: 'Engleski',
  langButtonSrb: 'Srpski',

  usernameLabel: 'Trenerr',
  firstNameLabel: 'Ime',
  lastNameLabel: 'Prezime',
  birthdayLabel: 'Datum rođenja',
  emailLabel: 'E-mail adresa',
  passwordLabel: 'Lozinka',
  passwordConfirmLabel: 'Potvrdi Lozinku',

  usernamePlaceholder: 'marko_kraljevic',
  firstNamePlaceholder: 'Marko',
  lastNamePlaceholder: 'Kraljevic',
  emailPlaceholder: 'marko@trainerr.com',
  passwordPlaceholder: '**********',
  passwordConfirmPlaceholder: '**********',

  signUp: 'Registracija',
  logIn: 'Prijavite se',

  newPassword: 'Nova Lozinka',
  confirmPassword: 'Potvrdi Lozinku',
  resetPassword: 'Nova Lozinka',

  resetButton: 'Potvrdi',
  signUpButton: 'Registruj se',
  logInButton: 'Prijavite se',

  langButton: {
    en: 'Engleski',
    sr: 'Srpski',
  },

  error: {
    min: 'Lozinka mora da sadrži najmanje 8 karaktera',
    required: 'Ovo polje je obavezno',
    email: 'Neodgovarajući format e-mail adrese',
    equals: 'Lozinke se ne poklapaju',
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

  login: {
    actionSuccess: 'Uspešno ste se prijavili!',
    actionError: 'Prijavljivanje nije uspelo. Molimo pokušajte ponovo.',
  },
};

export default srResource;
