import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../feature/cartSlice';

export default configureStore({
  reducer: {
    allCart : cartReducer,
  },
});