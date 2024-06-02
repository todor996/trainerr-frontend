import { ColorSystem } from '@shared/services/Color.service';
import { Feature } from '@shared/types/Feature.type';
import { ProfileInfo } from '@shared/types/ProfileInfo.type';
import { StoreSlice } from '@store/index.store';
import { AxiosResponse } from 'axios';

export interface OnboardingState {
  // Profile Page
  profile: ProfileInfo;

  // App Page
  app: {
    // Info
    name: string;
    description: string;

    // Features
    features: Feature[];

    // Style
    logoUrl: string;
    themeName: string;

    // Style - Colors

    colorSystem: ColorSystem;

    colors: {
      base100: string;

      primary: string[];
      secondary: string[];
      accent: string[];
      neutral: string[];
      info: string[];
      success: string[];
      warning: string[];
      error: string[];
    };

    // Meta
    meta: Record<string, unknown>;
  };

  progress: number;

  progressState: {
    info: number;
    features: number;
    style: number;
  };

  // TODO@store: Think about this and standardize it!
  // API Status
  loading: boolean;
  success: boolean;
  error: AxiosResponse['data'];
}

export const initProfile: OnboardingState['profile'] = {
  profileUrl: '',
  firstName: '',
  lastName: '',
  birthday: null,
  gender: null,
  description: '',
  tagline: '',
};

export const initApp: OnboardingState['app'] = {
  name: '',
  description: '',
  features: [],
  logoUrl: '',
  themeName: '',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  colorSystem: {} as any,
  colors: {
    base100: '',
    primary: [],
    secondary: [],
    accent: [],
    neutral: [],
    info: [],
    success: [],
    warning: [],
    error: [],
  },
  meta: {},
};

export const onboardingSliceState: StoreSlice<OnboardingState, OnboardingState> = () => ({
  app: initApp,
  profile: initProfile,

  progress: 0,

  progressState: {
    info: 0,
    features: 0,
    style: 0,
  },

  loading: false,
  success: false,
  error: null,
});
