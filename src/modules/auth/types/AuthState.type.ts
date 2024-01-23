export interface AuthState {
  token: string | null;
  isTrainer: boolean;
  loading: boolean;
  userUid: string | null;
  error: string | null;
}
