import { createProfile } from '../api/onboarding.api';
import { ProfileInfo } from '@shared/types/ProfileInfo.type';
import { User } from '@shared/types/User.type';
import { StoreSlice, asyncFn } from '@store/index.store';
import { OnboardingState } from './onboardingState.store';

export interface OnboardingActions {
  // Actions
  updateOnboarding: (payload: Partial<OnboardingState>) => void;
  updateProgress: (payload: Partial<OnboardingState['progressState']>) => void;
  updateApp: (payload: Partial<OnboardingState['app']>) => void;
  updateProfile: (payload: Partial<OnboardingState['profile']>) => void;

  // Async Actions
  createProfileAsync: (payload: ProfileInfo) => Promise<User>;
}

// TODO@store: Make snippet for store, slice, and actions
export const onboardingSliceActions: StoreSlice<OnboardingState, OnboardingActions> = (
  set,
) => ({
  // #######################################################
  // #region Actions

  updateOnboarding(payload) {
    set((state) => {
      return { ...state, ...payload };
    });
  },
  updateProfile(payload) {
    set((state) => {
      return { ...state, profile: { ...state.profile, ...payload } };
    });
  },
  updateApp(payload) {
    set((state) => {
      return { ...state, app: { ...state.app, ...payload } };
    });
  },
  updateProgress(payload) {
    set((state) => {
      Object.entries(payload).forEach(([step, progress]) => {
        state.progressState[step] = progress;
      });

      state.progress = 0;
      Object.values(state.progressState).forEach((progress) => {
        state.progress += progress;
      });

      return state;
    });
  },
  // #endregion Actions
  // #######################################################

  // #######################################################
  // #region Async Actions

  async createProfileAsync(payload) {
    const response = await asyncFn(set, () => createProfile(payload));
    return response.data;
  },

  // #endregion Async Actions
  // #######################################################
});
