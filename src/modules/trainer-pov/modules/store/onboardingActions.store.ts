import { PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { OnboardingState } from './onboardingSlice.store';
import { createProfile } from '../api/onboarding.api';
import { ProfileInfo } from '@shared/types/ProfileInfo.type';
import { User } from '@shared/types/User.type';
import { AxiosError } from 'axios';

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

// #######################################################
// #region Actions

export const onboardingActions = {
  updateAppState(
    state: OnboardingState,
    action: PayloadAction<Partial<OnboardingState['app']>>,
  ) {
    state.app = {
      ...state.app,
      ...action.payload,
    };
  },

  updateProfileState(
    state: OnboardingState,
    action: PayloadAction<Partial<OnboardingState['profile']>>,
  ) {
    state.profile = {
      ...state.profile,
      ...action.payload,
    };
  },

  // createProfileActionSuccess(state: OnboardingState, action: PayloadAction<User>) {
  //   updateStateOnSuccess(state);
  //   state.user = action.payload;
  // },
};

// #endregion Actions
// #######################################################
