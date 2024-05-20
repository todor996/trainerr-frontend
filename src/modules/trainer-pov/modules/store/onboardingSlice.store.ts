/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import { Feature } from '@shared/types/Feature.type';
import {
  createProfileAction,
  unregisteredOnboardingActions,
} from './onboardingActions.store';
import { ProfileInfo } from '@shared/types/ProfileInfo.type';
import { AxiosError, AxiosResponse } from 'axios';
import { ColorSystem } from '@shared/services/color.service';

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

  // TODO: Think about this and standardize it!
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

const initState: OnboardingState = {
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
};

// #region API State Actions

function updateStateOnSuccess(state: OnboardingState) {
  state.loading = false;
  state.error = null;
  state.success = true;
}

function updateStateOnLoading(state: OnboardingState) {
  state.loading = true;
  state.error = null;
  state.success = false;
}

function updateStateOnError(state: OnboardingState, action: unknown) {
  state.loading = false;
  state.error = action as AxiosError;
  state.success = false;
}

// #endregion API State Actions

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState: initState,
  reducers: {
    updateApp: unregisteredOnboardingActions.updateApp,
    updateProfile: unregisteredOnboardingActions.updateProfile,
    updateOnboarding: unregisteredOnboardingActions.updateOnboarding,
    updateProgress: unregisteredOnboardingActions.updateProgress,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProfileAction.pending, updateStateOnLoading)
      .addCase(createProfileAction.fulfilled, updateStateOnSuccess)
      .addCase(createProfileAction.rejected, updateStateOnError);
  },
});

export const onboardingActions = onboardingSlice.actions;
export const onboardingReducer = onboardingSlice.reducer;
