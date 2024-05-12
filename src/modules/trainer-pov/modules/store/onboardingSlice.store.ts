/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import { Feature } from '@shared/types/Feature.type';
import { createProfileAction, onboardingActions } from './onboardingActions.store';
import { ProfileInfo } from '@shared/types/ProfileInfo.type';

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

  // API Status
  loading: boolean;
  // TODO: Think about this and standardize it!

  // TODO: Should we have success and successMessage?
  success: boolean;

  // TODO: Should we have error and errorMessage?
  error: string | null;
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
  state.error = action as string;
}

// #endregion API State Actions

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState: initState,
  reducers: {
    updateAppState: onboardingActions.updateAppState,
    updateProfileState: onboardingActions.updateProfileState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProfileAction.pending, updateStateOnLoading)
      .addCase(createProfileAction.fulfilled, updateStateOnSuccess)
      .addCase(createProfileAction.rejected, updateStateOnError);
  },
});

export const { updateAppState, updateProfileState } = onboardingSlice.actions;

export const onboardingReducer = onboardingSlice.reducer;
