import { createSlice } from '@reduxjs/toolkit';
import { updateAuthStateAction, trainerSignupAction } from './authActions.store';
import { AuthState } from '../types';

const initialState: AuthState = {
  token: null,
  isTrainer: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAuthState: updateAuthStateAction,
  },
  extraReducers: (builder) => {
    builder.addCase(trainerSignupAction.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(trainerSignupAction.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload);
    });
    builder.addCase(trainerSignupAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const authReducer = authSlice.reducer;
