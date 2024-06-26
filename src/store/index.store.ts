import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { trainingReducer } from '@modules/trainer-pov/modules/training/store/trainingSlice.store';
import { DevtoolsOptions, PersistOptions, devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { StateCreator } from 'zustand';
import { AxiosError, AxiosResponse } from 'axios';
import { TrrError } from '@shared/types/TrrError.type';

// TODO@store: Replace redux with Zustand

// Persist Config
const persistConfig = {
  key: 'root',
  storage,
};

// Persisted Reducers
// TODO: Create TrainerPOV store
const persistedTrainingReducer = persistReducer(persistConfig, trainingReducer);

// Configure Store
export const store = configureStore({
  reducer: {
    // TODO: Create TrainerPOV store
    training: persistedTrainingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create Persistor
export const persistor = persistStore(store);

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// ############################################################################
// #region ZUSTAND

export type StoreSlice<InputSlice, OutputSlice> = StateCreator<
  InputSlice & OutputSlice,
  [],
  [],
  OutputSlice
>;

/**
 * Adds middleware to the store
 * - immer: allows us to mutate the state directly
 * - devtools: allows us to use the DevTools Extension
 * - persist: allows us to persist the state to local storage
 *
 * @param name - The name of the store
 * @param handle - The store handler
 * @param options - The options for the middleware
 */
export function middlewares<T>({
  name,
  handle,
  options,
}: {
  name: string;
  handle;
  options?: {
    persist?: PersistOptions<T, T>;
    devtools?: DevtoolsOptions;
  };
}) {
  return immer(
    devtools(
      persist<T, [['zustand/immer', never], ['zustand/devtools', never]], [], T>(handle, {
        name: `trr-${name}`,
        ...(options?.persist || {}),
      }),
      {
        name: `Trainerr - Zustand`,
        ...(options?.devtools || {}),
      },
    ),
  );
}

/**
 * Handles async functions and
 * sets the state (loading, error & success) accordingly
 *
 * eg.
 * `const response = await asyncFn(set, () => createProfile(payload));`
 */
export async function asyncFn<ResType>(
  set: (state: { loading?: boolean; error?: AxiosResponse; success?: boolean }) => void,
  func: () => Promise<AxiosResponse<ResType>>,
): Promise<AxiosResponse<ResType | TrrError>> {
  let res: AxiosResponse<ResType> = null;

  try {
    set({ loading: true, error: null, success: false });

    res = await func();

    set({ success: true, loading: false });
  } catch (error) {
    const errorRes = wrapInErrorObj((error as AxiosError<string>)?.response);

    set({ error: errorRes, success: false, loading: false });

    return errorRes;
  }

  return res;
}

/**
 * Wraps the error in an object...
 * TODO: Remove this function when BE is updated
 */
function wrapInErrorObj(error: AxiosResponse<string>): AxiosResponse<TrrError> {
  const trrError: TrrError = {
    message: error.data,
  };

  return {
    ...error,
    data: trrError,
  };
}

// #endregion ZUSTAND
// ############################################################################
