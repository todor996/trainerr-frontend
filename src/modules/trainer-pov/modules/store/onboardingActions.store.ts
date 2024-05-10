import { PayloadAction } from '@reduxjs/toolkit';
import { OnboardingState } from './onboardingSlice.store';

export interface OnboardingAppStateOptions extends Partial<OnboardingState['app']> {}

// #######################################################
// #region Actions

export const onboardingActions = {
  updateAppState(
    state: OnboardingState,
    action: PayloadAction<OnboardingAppStateOptions>,
  ) {
    state.app = {
      ...state.app,
      ...action.payload,
    };
  },

  updateProfileState(
    state: OnboardingState,
    action: PayloadAction<OnboardingAppStateOptions>,
  ) {
    state.profile = {
      ...state.profile,
      ...action.payload,
    };
  },
};

// #endregion Actions
// #######################################################

// #######################################################
// #region Async Actions

// #endregion Async Actions
// #######################################################
