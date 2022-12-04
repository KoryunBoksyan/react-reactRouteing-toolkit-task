import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiBase } from '../../../enums/url';

export const fetchCatCategory = createAsyncThunk(
  'cats/Fetch',
  async ({ categoryId, page }, thunkAPi) => {
    try {
      console.log(page, '>>>>>>');
      const response = await axios.get(`${apiBase}/images/search?limit=10&page=${page}&category_ids=${categoryId}`);
      return response.data;
    } catch (e) {
      return thunkAPi.rejectWithValue('ERROR_CATS');
    }
  },
);
