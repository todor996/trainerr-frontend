import { api } from '@api/index.api';
import { AxiosResponse } from 'axios';
import { TrainingPlan } from '../store/slice.store';

// TODO: Sync with BE should I set /trainer prefix?!!!

export function getTrainingPlans(): Promise<AxiosResponse<TrainingPlan[]>> {
  return api.get('/training-plan');
}

export function getTrainingPlan(id: number): Promise<AxiosResponse<TrainingPlan>> {
  return api.get(`/training-plans/${id}`);
}

export function createTrainingPlan(data: TrainingPlan): Promise<AxiosResponse<unknown>> {
  return api.post('/training-plan', data);
}

export function updateTrainingPlan(
  data: Partial<TrainingPlan>,
): Promise<AxiosResponse<unknown>> {
  return api.put(`/training-plan/${data.id}`, data);
}

export function deleteTrainingPlan(id: number): Promise<AxiosResponse<unknown>> {
  return api.delete(`/training-plan${id}`);
}
