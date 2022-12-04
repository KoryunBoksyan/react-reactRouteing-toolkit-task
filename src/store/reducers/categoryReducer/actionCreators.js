import { createAsyncThunk } from '@reduxjs/toolkit';
import { categoryUrl } from '../../../enums/url';
import { httpApiService } from '../../../services/httpApiService';


export const fetchCategory = createAsyncThunk(
  'category/fetchAll',
  async (_, thunkApi) => {
    try {
      const [response] = await Promise.all([httpApiService.get(categoryUrl)]);
      return response;
    } catch (e) {
      return thunkApi.rejectWithValue('ERROR_CATEGORY');
    }
  },
);
