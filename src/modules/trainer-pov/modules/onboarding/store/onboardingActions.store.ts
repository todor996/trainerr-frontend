import { createAppMeta, createProfile } from '../api/onboarding.api';
import { ProfileInfo } from '@shared/types/ProfileInfo.type';
import { User } from '@shared/types/User.type';
import { StoreSlice, asyncFn } from '@store/index.store';
import { OnboardingState } from './onboardingState.store';
import { TrrError } from '@shared/types/TrrError.type';
import { AppMeta } from '@shared/types/AppMeta.type';
import { AppMetaCreationData } from '@shared/types/AppMetaCreationData.type';

export interface OnboardingActions {
  // Actions
  updateOnboarding: (payload: Partial<OnboardingState>) => void;
  updateProgress: (payload: Partial<OnboardingState['progressState']>) => void;
  updateApp: (payload: Partial<OnboardingState['app']>) => void;
  updateProfile: (payload: Partial<OnboardingState['profile']>) => void;

  // Async Actions
  createProfileAsync: (payload: ProfileInfo) => Promise<User | TrrError>;
  createAppMetaAsync: (payload: AppMetaCreationData) => Promise<AppMeta | TrrError>;
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
    const formData = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      formData.append(key, value);
    });
    const res = await asyncFn(set, () => createProfile(payload));
    return res.data;
  },

  async createAppMetaAsync(payload) {
    console.log({ payload });

    const res = await asyncFn(set, () => createAppMeta(payload));

    console.log({ res });

    return res.data;
  },

  // #endregion Async Actions
  // #######################################################
});
