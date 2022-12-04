import { createSlice } from '@reduxjs/toolkit';
import { fetchCatCategory } from './actionsCreators';


const initialState = {
  cats: [],
  selectedCat: {},
  isLoading: false,
  error: '',
};

export const catSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    setSelectedCat(state, action) {
      state.selectedCat = state.cats.find(cat => cat.id === action.payload && cat.id.length === action.payload.length);
    },
  },
  extraReducers: {
    [fetchCatCategory.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchCatCategory.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.cats = action.payload;
    },
    [fetchCatCategory.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default catSlice.reducer;
