import { TrainerSignup, Login } from '../types';
import { api } from '@api/index.api';

const BASE_URL = 'auth';

export function signup(data: TrainerSignup): Promise<{ data: string }> {
  return api.post(`/${BASE_URL}/trainer/signup`, data);
}

export function login(data: Login): Promise<{ data: string }> {
  return api.post(`/${BASE_URL}/login`, data);
}
