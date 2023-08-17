import { createSlice } from "@reduxjs/toolkit";
import { _updateHomeStateAction } from "./home.actions";

export interface HomeState {
  title: string;
  userName: string;
}

const initialState: HomeState = {
  title: "Naslov aplikacije",
  userName: "",
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    updateHomeState: _updateHomeStateAction,
  },
});

export const { updateHomeState } = homeSlice.actions;

export const homeReducer = homeSlice.reducer;
