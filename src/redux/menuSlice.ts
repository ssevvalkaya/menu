// src/redux/menuSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: ['Ana Yemek', 'Çorbalar', 'Tatlılar', 'İçecekler'],
  selectedCategory: null,
  items: {
    'Ana Yemek': ['Köfte', 'Izgara Tavuk', 'Pizza'],
    'Çorbalar': ['Mercimek Çorbası', 'Ezogelin Çorbası'],
    'Tatlılar': ['Kadayıf', 'Baklava'],
    'İçecekler': ['Su', 'Ayran', 'Kola'],
  },
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setCategory } = menuSlice.actions;
export default menuSlice.reducer;
