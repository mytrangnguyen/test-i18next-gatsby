import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

export default () => {
  const store = configureStore({
    reducer: rootReducer,
  });

  return store;
};
