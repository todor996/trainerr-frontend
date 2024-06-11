import { middlewares } from '@store/index.store';
import { create } from 'zustand';
import { AuthActions, authSliceActions } from './actions.store';
import { AuthState, authSliceState } from './state.store';

export const useAuthStore = create<AuthState & AuthActions>()(
  middlewares<AuthState & AuthActions>({
    name: 'auth',
    handle: (set, get, store) => ({
      ...authSliceState(set, get, store),
      ...authSliceActions(set, get, store),
    }),
  }),
);
