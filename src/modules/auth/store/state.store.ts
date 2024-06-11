import { StoreSlice } from '@store/index.store';
import { AxiosResponse } from 'axios';

export interface AuthState {
  username: string;
  email: string;

  token: string;
  isTrainer: boolean;
  userUid: string;

  loading: boolean;
  error: AxiosResponse; // TODO: Set better type
  success: boolean;
}

export const authSliceState: StoreSlice<AuthState, AuthState> = () => ({
  username: null,
  email: null,

  token: null,
  isTrainer: null,
  userUid: null,

  loading: null,
  error: null,
  success: null,
});
