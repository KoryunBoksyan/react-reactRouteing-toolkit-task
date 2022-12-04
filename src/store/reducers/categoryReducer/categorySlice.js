import { createSlice } from '@reduxjs/toolkit';
import { fetchCategory } from './actionCreators';

const initialState = {
  category: [],
  selectedCategoryId: null,
  isLoading: false,
  error: '',
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setSelectedCategoryId(state, action) {
      state.selectedCategoryId = action.payload;
    },
  },
  extraReducers: {
    [fetchCategory.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchCategory.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.category = action.payload;
    },
    [fetchCategory.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default categorySlice.reducer;
