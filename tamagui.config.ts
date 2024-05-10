import { createTamagui } from '@tamagui/core';
import { shorthands } from '@tamagui/shorthands';

import { animations } from './src/tamagui/animations';
import { fonts } from './src/tamagui/fonts';
import { media } from './src/tamagui/media';
import { themes } from './src/tamagui/themes';
import { tokens } from './src/tamagui/tokens';

const config = createTamagui({
  defaultFont: 'body',
  animations,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  fonts,
  themes,
  tokens,
  media,
});

type AppConfig = typeof config;

declare module 'tamagui' {
  // overrides TamaguiCustomConfig so that custom types
  // work everywhere `tamagui` is imported
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
