import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';
import {
  updateAuthStateAction,
  trainerSignupAction,
  loginAction,
} from './authActions.store';
import { AuthState } from '../types';

const initialState: AuthState = {
  username: null,
  email: null,

  token: null,
  isTrainer: false,
  userUid: null,

  loading: false,
  error: null,
  success: false,
};

// #region API State Actions

function updateStateOnSuccess(state: AuthState, action: PayloadAction<string>) {
  const decoded = jwtDecode<{ isTrainer: boolean; userUid: string }>(action.payload);
  state.token = action.payload;
  state.isTrainer = decoded.isTrainer;
  state.userUid = decoded.userUid;
  localStorage.setItem('token', action.payload);
  state.loading = false;
  state.error = null;
  state.success = true;
}

function updateStateOnLoading(state: AuthState) {
  state.loading = true;
  state.error = null;
  state.success = false;
}

//eslint-disable-next-line
function updateStateOnError(state: AuthState, action: any) {
  state.loading = false;
  state.error = action.payload as string;
  state.token = null;
  state.isTrainer = false;
}

// #endregion API State Actions

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAuthState: updateAuthStateAction,
  },
  extraReducers: (builder) => {
    builder
      // trainerSignupAction
      .addCase(trainerSignupAction.pending, updateStateOnLoading)
      .addCase(trainerSignupAction.fulfilled, updateStateOnSuccess)
      .addCase(trainerSignupAction.rejected, updateStateOnError)

      // loginAction
      .addCase(loginAction.pending, updateStateOnLoading)
      .addCase(loginAction.fulfilled, updateStateOnSuccess)
      .addCase(loginAction.rejected, updateStateOnError);
  },
});

export const { updateAuthState } = authSlice.actions;

export const authReducer = authSlice.reducer;
