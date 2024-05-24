import { middlewares } from '@store/index.store';
import { create } from 'zustand';
import { OnboardingActions, onboardingSliceActions } from './onboardingActions.store';
import { OnboardingState, onboardingSliceState } from './onboardingState.store';

// TODO@store: Write snippet for this
export const useOnboardingStore = create<OnboardingState & OnboardingActions>()(
  middlewares<OnboardingState & OnboardingActions>({
    name: 'onboarding',
    handle: (set, get, store) => ({
      ...onboardingSliceState(set, get, store),
      ...onboardingSliceActions(set, get, store),
    }),
  }),
);
