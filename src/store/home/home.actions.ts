import { PayloadAction } from "@reduxjs/toolkit";
import { HomeState } from "./home.slice";

export interface HomeStateOptions extends Partial<HomeState> {}

export function _updateHomeStateAction(
  state: HomeState,
  action: PayloadAction<HomeStateOptions>
) {
  /**
   *  Here you can actually "mutate" state and not return a new state...
   *  Because React is using immer, and if something is changed it will return new state...
   *
   * @see {@link https://redux.js.org/tutorials/typescript-quick-start#application-usage}
   */
  return {
    ...state,
    ...action.payload,
  };
}
