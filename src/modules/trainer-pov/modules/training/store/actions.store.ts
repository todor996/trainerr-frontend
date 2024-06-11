import { getTrainingPlan, getTrainingPlans } from '../api/training.api';
import { StoreSlice, asyncFn } from '@store/index.store';
import { TrainingPlan, TrainingState, initPlan } from './state.store';
import { TrrError } from '@shared/types/TrrError.type';

export interface TrainingStateOptions extends Partial<TrainingState> {}

export interface TrainingActions {
  // Actions
  updateTraining: (payload: Partial<TrainingState>) => void;
  setInitPlan: () => void;

  // Async Actions
  getTrainingPlans: () => Promise<TrainingPlan[] | TrrError>;
  getTrainingPlan: (id: number) => Promise<TrainingPlan | TrrError>;
}

export const trainingSliceActions: StoreSlice<TrainingState, TrainingActions> = (
  set,
) => ({
  // #######################################################
  // #region Actions

  updateTraining(payload) {
    set((state) => {
      return { ...state, ...payload };
    });
  },

  setInitPlan() {
    set((state) => {
      return { ...state, plan: initPlan };
    });
  },
  // #endregion Actions
  // #######################################################

  // #######################################################
  // #region Async Actions

  // Use `asyncFn` function in async actions

  async getTrainingPlans() {
    const res = await asyncFn(set, async () => getTrainingPlans());

    // TODO: Think of better way to handle error
    if (res.status.toString().charAt(0) !== '2') {
      set({ plans: [] });
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set({ plans: res.data as any[] });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return res.data as any;
  },

  async getTrainingPlan(id: number) {
    const res = await asyncFn(set, async () => getTrainingPlan(id));

    if (res.status.toString().charAt(0) !== '2') {
      set({ plan: initPlan });
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set({ plan: res.data as any });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return res.data as any;
  },

  // #endregion Async Actions
  // #######################################################
});
