import axios from '@shared/utils/axios.util';
import { TrainerSignup } from '../types/TrainerSignup.type';

const BASE_URL = 'auth';

export function signup(data: TrainerSignup) {
  return axios.post(`/${BASE_URL}/trainer/signup`, data);
}
