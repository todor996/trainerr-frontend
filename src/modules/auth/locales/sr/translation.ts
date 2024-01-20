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
  error: {
    minLength: 'Lozinka mora da sadrži najmanje 8 karaktera',
    required: 'Ovo polje je obavezno',
  },
  signUpButton: 'Prijavi se',
  logInButton: 'Prijavite se',
  langButton: {
    en: 'Engleski',
    sr: 'Srpski',
  },
};

export default srResource;
