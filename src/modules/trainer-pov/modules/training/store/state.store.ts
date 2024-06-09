import { StoreSlice } from '@store/index.store';
import { AxiosResponse } from 'axios';
import { Training } from './slice.store';

// TODO: Sync this with the backend and other models...

export interface TrainingPlan {
  id: number;
  name: string;
  description: string;
  trainings: Training[];
}

// TODO: Use for a referance
export interface Unit {
  type: 'reps' | 'time' | 'distance' | 'weight'; // TODO: Make enum
  value: number;
  unit: 'kg' | 'reps' | 'km' | 'time'; // TODO: Make enum
}

export interface Media {
  src: string;
  alt: string;
  type: 'video' | 'image';
}

export interface TrainingState {
  // TODO@api: Set this properly
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plan: TrainingPlan | any;
  plans: TrainingPlan[];

  // API Status
  loading: boolean;
  success: boolean;
  error: AxiosResponse['data'];
}

export const initPlan = {
  id: -1,
  name: '',
  description: '',
  trainings: [],
};

export const trainingSliceState: StoreSlice<TrainingState, TrainingState> = () => ({
  plan: initPlan,
  plans: [],

  loading: false,
  success: false,
  error: null,
});
