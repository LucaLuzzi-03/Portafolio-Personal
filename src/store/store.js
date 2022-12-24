import { configureStore } from '@reduxjs/toolkit';
import { componentsSlice } from './componentsSlice';

export const store = configureStore({
  reducer: {
    components: componentsSlice.reducer
  },
});
