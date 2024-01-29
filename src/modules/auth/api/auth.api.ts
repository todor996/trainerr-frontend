import axios from '@shared/utils/axios.util';
import { TrainerSignup, Login } from '../types';

const BASE_URL = 'auth';

export function signup(data: TrainerSignup): Promise<{ data: string }> {
  return axios.post(`/${BASE_URL}/trainer/signup`, data);
}

export function login(data: Login): Promise<{ data: string }> {
  return axios.post(`/${BASE_URL}/login`, data);
}
