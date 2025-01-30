
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: ['Ana Yemek', 'Çorbalar', 'Tatlılar', 'İçecekler'],
  selectedCategory: 'Ana Yemek',
  items: {
    'Ana Yemek': ['Köfte', 'Izgara Tavuk', 'Biftek'],
    'Çorbalar': ['Mercimek Çorbası', 'Tarator', 'Ezogelin Çorbası'],
    'Tatlılar': ['Baklava', 'Kadayıf', 'Muhallebi'],
    'İçecekler': ['Kola', 'Ayran', 'Su'],
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
