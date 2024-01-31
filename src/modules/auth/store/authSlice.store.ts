import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';
import {
  updateAuthStateAction,
  trainerSignupAction,
  loginAction,
} from './authActions.store';
import { AuthState } from '../types';

const initialState: AuthState = {
  token: null,
  isTrainer: false,
  userUid: null,
  loading: false,
  error: null,
};

function updateAuthStateOnSuccess(state: AuthState, action: PayloadAction<string>) {
  const decoded = jwtDecode<{ isTrainer: boolean; userUid: string }>(action.payload);
  state.token = action.payload;
  state.isTrainer = decoded.isTrainer;
  state.userUid = decoded.userUid;
  localStorage.setItem('token', action.payload);
  state.loading = false;
  state.error = null;
}

function updateAuthStateOnLoading(state: AuthState) {
  state.loading = true;
  state.error = null;
}

//eslint-disable-next-line
function updateAuthStateOnError(state: AuthState, action: any) {
  state.loading = false;
  state.error = action.payload as string;
  state.token = null;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAuthState: updateAuthStateAction,
  },
  extraReducers: (builder) => {
    builder
      .addCase(trainerSignupAction.pending, updateAuthStateOnLoading)
      .addCase(trainerSignupAction.fulfilled, updateAuthStateOnSuccess)
      .addCase(trainerSignupAction.rejected, updateAuthStateOnError)
      .addCase(loginAction.pending, updateAuthStateOnLoading)
      .addCase(loginAction.fulfilled, updateAuthStateOnSuccess)
      .addCase(loginAction.rejected, updateAuthStateOnError);
  },
});

export const authReducer = authSlice.reducer;
