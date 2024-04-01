import { PayloadAction } from '@reduxjs/toolkit';
import { HomeState } from './homeType.store';

export interface HomeStateOptions extends Partial<HomeState> {}

export function updateHomeStateAction(
  state: HomeState,
  action: PayloadAction<HomeStateOptions>,
) {
  return {
    ...state,
    ...action.payload,
  };
}
