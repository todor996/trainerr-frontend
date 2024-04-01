import { createSlice } from '@reduxjs/toolkit';
import {
  getTrainingPlansAction,
  updateOnLoading,
  updateTrainingStateAction,
  getTrainingPlansActionOnError,
  getTrainingPlansActionOnSuccess,
  getTrainingPlanAction,
  getTrainingPlanActionOnSuccess,
  setInitStatePlanAction,
} from './trainingActions.store';
import { AxiosError } from 'axios';

// TODO: Think about adding this props to Training
// duration: number;
// difficulty: string;
// type: string;
// status: string;

// TODO: Move this types to separate file

export interface TrainingPlan {
  id: number;
  name: string;
  description: string;
  trainings: Training[];
}

export interface Training {
  id: number;
  name: string;
  description: string;
  exercise: Exercise[];
}

export interface Exercise {
  id: number;
  name: string;
  description: string;
  media: Media[];
  units: Unit[];
}

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
  plan: TrainingPlan;
  plans: TrainingPlan[];
  loading: boolean;
  // TODO: Think about setting only error message
  error: AxiosError | null;
  errorMessage: string | null;
  successMessage: string;
}

export const initPlan = {
  id: -1,
  name: '',
  description: '',
  trainings: [],
};

const initState: TrainingState = {
  plan: initPlan,
  plans: [],
  loading: false,
  error: null,
  errorMessage: '',
  successMessage: '',
};

const trainingSlice = createSlice({
  name: 'training',
  initialState: initState,
  reducers: {
    updateTrainingState: updateTrainingStateAction,
    setInitStatePlan: setInitStatePlanAction,
  },
  extraReducers: (builder) => {
    builder.addCase(getTrainingPlansAction.pending, updateOnLoading);
    builder.addCase(getTrainingPlansAction.fulfilled, getTrainingPlansActionOnSuccess);
    builder.addCase(getTrainingPlansAction.rejected, getTrainingPlansActionOnError);

    builder.addCase(getTrainingPlanAction.pending, updateOnLoading);
    builder.addCase(getTrainingPlanAction.fulfilled, getTrainingPlanActionOnSuccess);
    builder.addCase(getTrainingPlanAction.rejected, getTrainingPlansActionOnError);
  },
});

export const { updateTrainingState, setInitStatePlan } = trainingSlice.actions;

export const trainingReducer = trainingSlice.reducer;
