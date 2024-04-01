import { PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { TrainingPlan, TrainingState, initPlan } from './trainingSlice.store';
import { getTrainingPlan, getTrainingPlans } from '../api/training.api';
import { AxiosError } from 'axios';

export interface TrainingStateOptions extends Partial<TrainingState> {}

// TODO: Move to some global actions, or think about something like that
function updateOnSuccess(state: TrainingState) {
  state.loading = false;
  state.error = null;
  state.errorMessage = '';
  state.successMessage = '';
}

function updateOnError(state: TrainingState, action: PayloadAction<unknown>) {
  state.loading = false;
  state.successMessage = '';
  state.error = action.payload as AxiosError;
  state.errorMessage = JSON.stringify(action.payload);
}

export function updateOnLoading(state: TrainingState) {
  state.loading = true;
  state.error = null;
  state.errorMessage = '';
  state.successMessage = '';
}

export function updateTrainingStateAction(
  state: TrainingState,
  action: PayloadAction<TrainingStateOptions>,
) {
  return {
    ...state,
    ...action.payload,
  };
}

export function setInitStatePlanAction(state: TrainingState) {
  state.plan = initPlan;
}

//#region Async Actions

export const getTrainingPlansAction = createAsyncThunk(
  'training/getTrainingPlans',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getTrainingPlans();
      return response.data;
    } catch (error: unknown) {
      console.log({ error });
      return rejectWithValue(error as AxiosError);
    }
  },
);

export function getTrainingPlansActionOnSuccess(
  state: TrainingState,
  action: PayloadAction<TrainingPlan[]>,
) {
  updateOnSuccess(state);
  state.plans = action.payload;
}

export function getTrainingPlansActionOnError(
  state: TrainingState,
  action: PayloadAction<unknown>,
) {
  updateOnError(state, action);
}

export const getTrainingPlanAction = createAsyncThunk(
  'training/getTrainingPlan',
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await getTrainingPlan(id);
      return response.data;
    } catch (error: unknown) {
      return rejectWithValue(error as AxiosError);
    }
  },
);

export function getTrainingPlanActionOnSuccess(
  state: TrainingState,
  action: PayloadAction<TrainingPlan>,
) {
  updateOnSuccess(state);
  state.plan = action.payload;
}

export function getTrainingPlanActionOnError(
  state: TrainingState,
  action: PayloadAction<unknown>,
) {
  updateOnError(state, action);
}
