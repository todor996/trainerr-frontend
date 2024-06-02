import { TrrError } from '@shared/types/TrrError.type';
import { TrainerSignup, Login } from '../types';
import { api } from '@api/index.api';

export function signup(data: TrainerSignup) {
  return api.post<string | TrrError>(`/auth/trainer/signup`, data);
}

export function login(data: Login) {
  return api.post<string | TrrError>(`/auth/login`, data);
}
