// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './menuSlice'; // Redux slice'ınızı import edin

export const store = configureStore({
  reducer: {
    menu: menuReducer,  // menu slice'ını store'a ekleyin
  },
});
