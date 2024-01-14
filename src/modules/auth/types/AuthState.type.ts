export interface AuthState {
  token: string | null;
  isTrainer: boolean;
  loading: boolean;
  error: string | null;
}
