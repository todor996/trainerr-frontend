import { OnboardingLocal } from '../../types/OnboardingLocal.type.tpov';

export const srResource: OnboardingLocal = {
  title: 'Dobrodosli na Onbarding',
  next: 'Sledeće',
  back: 'Nazad',

  stepper: {
    singUp: 'Registracija',
    profile: 'Profil',
    app: 'Aplikacija',
  },

  profile: {
    title: 'Profil',

    firstNameLabel: 'Ime',
    firsNamePlaceholder: 'James',

    lastNameLabel: 'Prezime',
    lastNamePlaceholder: 'Bond',

    birthdayLabel: 'Datum rođenja',

    genderLabel: 'Pol',
    genderPlaceholder: 'Pol',

    descriptionLabel: 'Opis',
    descriptionPlaceholder: 'Nesto o sebi',

    taglineLabel: 'Slogan',
    taglinePlaceholder: 'Borba! Al će pobedimo!',
  },
  app: {
    title: 'Konfiguracija',

    info: {
      name: 'Trainerr Marko',
      description: 'Najbolja aplikacija ikada!',
    },
    features: {
      training: 'Trening',
      trainingDescription: 'Kreirajte planove treninga za svoje klijente',
      nutrition: 'Ishrana',
      nutritionDescription: 'Kreirajte planove ishrane za svoje klijente',
      questionary: 'Upitnik',
      questionaryDescription: 'Kreirajte upitnike za svoje klijente',
    },
    style: {
      title: 'Stil',
      logoLabel: 'logo',

      colors: {
        base: 'Osnovna',
        primary: 'Primarna',
        secondary: 'Sekundarna',
        accent: 'Akcentna',
        neutral: 'Neutralna',
        info: 'Info',
        success: 'Uspeh',
        warning: 'Upozorenje',
        error: 'Greška',
      },
    },
  },
};

export default srResource;
