import axios from '@shared/utils/axios.util';
import { TrainerProfileInput } from '../types';

// const BASE_URL = 'trainer';

export function createTrainerProfile(data: TrainerProfileInput) {
  return axios.post(`/profile/trainer`, data);
}
