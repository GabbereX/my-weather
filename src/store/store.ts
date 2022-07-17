import { combineReducers, configureStore } from '@reduxjs/toolkit';

export const actionsRoot = {

};

export const reducers = {

};

const rootReducer = combineReducers(reducers);

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const store = setupStore();
