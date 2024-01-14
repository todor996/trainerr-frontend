import { PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { signup } from '../api/signup.api';
import { AuthState } from '../types';
import { TrainerSignup } from '@modules/auth/types';

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
export const trainerSignupAction = createAsyncThunk<
  TrainerSignup,
  { authData: TrainerSignup }
>('auth/trainerSignup', async ({ authData }, { rejectWithValue }) => {
  try {
    const response = await signup(authData);
    return response.data;
    //eslint-disable-next-line
  } catch (error: any) {
    console.log(error);
    console.log(error.response);
    return rejectWithValue(error.response?.data);
  }
});
