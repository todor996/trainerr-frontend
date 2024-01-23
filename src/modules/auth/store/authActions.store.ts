import { PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { signup, login } from '../api/index.api.ts';
import { AuthState, TrainerSignup, Login } from '../types';

export interface AuthStateOptions extends Partial<AuthState> {}

export function updateAuthStateAction(
  state: AuthState,
  action: PayloadAction<AuthStateOptions>,
) {
  /**
   *  Here you can actually "mutate" state and not return a new state...
   *  Because React is using immer, and if something is changed it will return a new state...
   *
   * @see {@link https://redux.js.org/tutorials/typescript-quick-start#application-usage}
   */
  return {
    ...state,
    ...action.payload,
  };
}

// Define an async action creator for signup
export const trainerSignupAction = createAsyncThunk<string, TrainerSignup>(
  'auth/trainerSignup',
  async (data, { rejectWithValue }) => {
    try {
      const response = await signup(data);
      return response.data;
      //eslint-disable-next-line
    } catch (error: any) {
      return rejectWithValue(error.response?.data);
    }
  },
);

export const loginAction = createAsyncThunk<string, Login>(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const response = await login(data);
      return response.data;
      //eslint-disable-next-line
    } catch (error: any) {
      return rejectWithValue(error.response?.data);
    }
  },
);
