import { createSlice } from "@reduxjs/toolkit";
import { _updateHomeStateAction } from "./homeActions.store";

export interface HomeState {
    title: string;
    username: string;
}

const initialState: HomeState = {
    title: "Naslov aplikacije",
    username: "",
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