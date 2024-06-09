import { StoreSlice, asyncFn } from '@store/index.store';
import { AuthState } from './state.store';
import { login, signup } from '../api/auth.api';
import { Login, TrainerSignup } from '../types';
import { AxiosResponse } from 'axios';
import { jwtDecode } from 'jwt-decode';
import { TrrError } from '@shared/types/TrrError.type';

export interface AuthActions {
  // Actions
  updateAuth: (payload: Partial<AuthState>) => void;

  // Async Actions
  trainerSignupAsync: (payload: TrainerSignup) => Promise<void>;
  trainerLoginAsync: (payload: Login) => Promise<void>;
}

export const authSliceActions: StoreSlice<AuthState, AuthActions> = (set) => ({
  // #######################################################
  // #region Actions

  updateAuth(payload) {
    set((state) => {
      return { ...state, ...payload };
    });
  },
  // #endregion Actions
  // #######################################################

  // #######################################################
  // #region Async Actions

  // Use `asyncFn` function in async actions

  async trainerSignupAsync(payload) {
    await asyncFn(set, async () => {
      const res = await signup(payload);
      authUser(res, set);
      return res;
    });
  },

  async trainerLoginAsync(payload) {
    set({ email: payload.email });

    await asyncFn(set, async () => {
      const res = await login(payload);
      authUser(res, set);
      return res;
    });

    set({ loading: false, error: null, success: false });
  },

  // #endregion Async Actions
  // #######################################################
});

/**
 * Decodes the token and sets the state
 */
function authUser(res: AxiosResponse<string | TrrError, unknown>, set) {
  if (res.status > 400) {
    set({ token: null, isTrainer: false, userUid: null });
    return;
  }

  const token = res.data as string;
  const decoded = jwtDecode<{ isTrainer: boolean; userUid: string }>(token);

  set({ token: token, isTrainer: decoded.isTrainer, userUid: decoded.userUid });
  localStorage.setItem('token', token);
}
