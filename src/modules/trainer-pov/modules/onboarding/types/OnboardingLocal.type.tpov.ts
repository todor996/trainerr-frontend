export interface OnboardingLocal {
  title: string;
  next: string;
  back: string;

  stepper: {
    singUp: string;
    profile: string;
    app: string;
  };

  profile: {
    title: string;
    firstNameLabel: string;
    firsNamePlaceholder: string;

    lastNameLabel: string;
    lastNamePlaceholder: string;

    birthdayLabel: string;

    genderLabel: string;
    genderPlaceholder: string;

    descriptionLabel: string;
    descriptionPlaceholder: string;

    taglineLabel: string;
    taglinePlaceholder: string;
  };

  app: {
    title: string;

    info: {
      name: string;
      description: string;
    };

    features: {
      training: string;
      trainingDescription: string;
      nutrition: string;
      nutritionDescription: string;
      questionary: string;
      questionaryDescription: string;
    };

    style: {
      title: string;
      logoLabel: string;

      colors: {
        base: string;
        primary: string;
        secondary: string;
        accent: string;
        neutral: string;
        info: string;
        success: string;
        warning: string;
        error: string;
      };
    };
  };
}
