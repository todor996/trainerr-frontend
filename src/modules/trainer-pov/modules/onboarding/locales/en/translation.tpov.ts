import { OnboardingLocal } from '../../types/OnboardingLocal.type.tpov';

export const enResource: OnboardingLocal = {
  title: 'Welcome to Trainer POV',
  next: 'Next',
  back: 'Back',

  stepper: {
    singUp: 'Sign Up',
    profile: 'Profile',
    app: 'App',
  },

  profile: {
    title: 'Profile',

    firstNameLabel: 'First Name',
    firsNamePlaceholder: 'James',

    lastNameLabel: 'Last Name',
    lastNamePlaceholder: 'Bond',

    birthdayLabel: 'Birthday',

    genderLabel: 'Gender',
    genderPlaceholder: 'Gender',

    descriptionLabel: 'Description',
    descriptionPlaceholder: 'Something about yourself',

    taglineLabel: 'Tagname',
    taglinePlaceholder: 'Go Hard or Go Home!',
  },
  app: {
    title: 'Your App Setup',

    info: {
      title: 'Info',

      nameLabel: 'Application Name',
      namePlaceholder: 'Trainerr James',

      descriptionLabel: 'Description',
      descriptionPlaceholder: 'The best Trainerr app ever!',
    },
    features: {
      title: 'Features',

      trainingLabel: 'Training',
      trainingDescription: 'Create Training Plans for your Clients',
      nutritionLabel: 'Nutrition',
      nutritionDescription: 'Create Nutrition Plans for your Clients',
      questionaryLabel: 'Questionary',
      questionaryDescription: 'Create Questionnaires for your Clients',
    },
    style: {
      title: 'Style',
      logoLabel: 'Logo',

      colors: {
        base: 'Base',
        primary: 'Primary',
        secondary: 'Secondary',
        accent: 'Accent',
        neutral: 'Neutral',
        info: 'Info',
        success: 'Success',
        warning: 'Warning',
        error: 'Error',
      },
    },
  },
};

export default enResource;
