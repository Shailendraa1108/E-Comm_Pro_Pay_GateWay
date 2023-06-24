import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/product-list/productSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
