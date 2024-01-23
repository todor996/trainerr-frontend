import axios from '@shared/utils/axios.util';
import { TrainerSignup, Login } from '../types';

const BASE_URL = 'auth';

export function signup(data: TrainerSignup) {
  return axios.post(`/${BASE_URL}/trainer/signup`, data);
}

export function login(data: Login) {
  return axios.post(`/${BASE_URL}/login`, data);
}
