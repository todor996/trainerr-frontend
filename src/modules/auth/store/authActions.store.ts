import { PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { signup, login } from '../api/auth.api';
import { AuthState, TrainerSignup, Login } from '../types';

export interface AuthStateOptions extends Partial<AuthState> {}

export function updateAuthStateAction(
  state: AuthState,
  action: PayloadAction<AuthStateOptions>,
) {
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
