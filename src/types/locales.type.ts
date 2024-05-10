export interface AppResource {
  title: string;
  description: {
    part1: string;
    part2: string;
  };
  uncommon: {
    guest: string;
  };
  sr: {
    full: string;
    short: string;
  };
  en: {
    full: string;
    short: string;
  };
  action: {
    logout: string;
  };
  page: {
    training: {
      training: string;
      plan: string;
      exercises: string;
    };
    nutrition: {
      nutrition: string;
    };
    clients: {
      clients: string;
    };
    notifications: {
      notifications: string;
    };
    profile: {
      profile: string;
    };
    app: {
      app: string;
    };
    monetization: {
      monetization: string;
    };
    settings: {
      settings: string;
    };
    feedback: {
      feedback: string;
    };
  };
  error: {
    required: string;
    email: string;
    max: string;
    min: string;
  };
  theme: {
    custom_light: string;
    custom_dark: string;
    light: string;
    dark: string;
    cupcake: string;
    bumblebee: string;
    emerald: string;
    corporate: string;
    synthwave: string;
    retro: string;
    cyberpunk: string;
    valentine: string;
    halloween: string;
    garden: string;
    forest: string;
    aqua: string;
    lofi: string;
    pastel: string;
    fantasy: string;
    wireframe: string;
    black: string;
    luxury: string;
    dracula: string;
    cmyk: string;
    autumn: string;
    business: string;
    acid: string;
    lemonade: string;
    night: string;
    coffee: string;
    winter: string;
    dim: string;
    nord: string;
    sunset: string;
  };
}
