export interface AuthState {
  // User
  username: string | null;
  email: string | null;

  // MetaData
  userUid: string | null;
  token: string | null;
  isTrainer: boolean;

  // Api State
  loading: boolean;
  error: string | null;
  success: boolean;
}
