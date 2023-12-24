import { createSlice } from "@reduxjs/toolkit";
import { updateHomeStateAction } from "./homeActions.store";
import { HomeState } from "./homeType.store";

const initialState: HomeState = {
  title: "Naslov aplikacije",
  username: "",
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    updateHomeState: updateHomeStateAction,
  },
});

export const { updateHomeState } = homeSlice.actions;

export const homeReducer = homeSlice.reducer;
