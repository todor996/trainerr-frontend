import { middlewares } from '@store/index.store';
import { create } from 'zustand';
import { TrainingActions, trainingSliceActions } from './actions.store';
import { TrainingState, trainingSliceState } from './state.store';

export const useTrainingStore = create<TrainingState & TrainingActions>()(
  middlewares<TrainingState & TrainingActions>({
    name: 'training',
    handle: (set, get, store) => ({
      ...trainingSliceState(set, get, store),
      ...trainingSliceActions(set, get, store),
    }),
  }),
);
