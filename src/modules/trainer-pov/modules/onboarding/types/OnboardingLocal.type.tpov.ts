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
      title: string;

      nameLabel: string;
      namePlaceholder: string;

      descriptionLabel: string;
      descriptionPlaceholder: string;
    };

    features: {
      title: string;

      trainingLabel: string;
      trainingDescription: string;

      nutritionLabel: string;
      nutritionDescription: string;

      questionaryLabel: string;
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
