import { configureStore } from '@reduxjs/toolkit';
import calculate from './slices/calculateSlice';

export const store = configureStore({
  reducer: { calculate },
});
