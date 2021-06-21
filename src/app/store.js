import { configureStore } from '@reduxjs/toolkit';
import leadsReducer from '../features/hpleads/leadsSlice';

export const store = configureStore({
  reducer: {
    leads: leadsReducer,
  },
});
