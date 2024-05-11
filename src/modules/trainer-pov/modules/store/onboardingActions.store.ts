import { PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { OnboardingState } from './onboardingSlice.store';
import { createProfile } from '../api/onboarding.api';
import { ProfileInfo } from '@shared/types/ProfileInfo.type';
import { User } from '@shared/types/User.type';
import { AxiosError } from 'axios';

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

export const createProfileAction = createAsyncThunk<User, ProfileInfo>(
  'onboarding/createProfile',
  async (data, { rejectWithValue }) => {
    try {
      const response = await createProfile(data);
      return response.data;
    } catch (error) {
      return rejectWithValue((error as AxiosError).response?.data);
    }
  },
);

// #endregion Async Actions
// #######################################################
