import { api } from '@api/index.api';
import { TrainingPlan } from '../store/trainingSlice.store';

// TODO: Sync with BE should I set /trainer prefix?

export function getTrainingPlans(): Promise<{ data: TrainingPlan[] }> {
  return api.get('/training/plans');
}

export function getTrainingPlan(id: number): Promise<{ data: TrainingPlan }> {
  return api.get(`/training/plans/${id}`);
}

export function createTrainingPlan(data: TrainingPlan): Promise<{ data: unknown }> {
  return api.post('/training/plans', data);
}

export function updateTrainingPlan(
  data: Partial<TrainingPlan>,
): Promise<{ data: unknown }> {
  return api.put(`/training/plans/${data.id}`, data);
}

export function deleteTrainingPlan(id: number): Promise<{ data: unknown }> {
  return api.delete(`/training/plans/${id}`);
}
