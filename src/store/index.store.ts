import { configureStore } from '@reduxjs/toolkit';
import { homeReducer } from '@modules/home/store/homeSlice.store';

export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
