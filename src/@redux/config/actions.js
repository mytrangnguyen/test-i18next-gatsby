import { createAsyncThunk } from '@reduxjs/toolkit';
// import api
import { getConfigApi } from 'api/config';

export const getConfig = createAsyncThunk(
  'config/getConfig',
  async (payload, thunkAPI) => {
    try {
      const data = await getConfigApi();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

export const setModalConfig = createAsyncThunk(
  'config/setModalConfig',
  async (payload, thunkAPI) => {
    try {
      return payload;
    } catch (error) {
      // console.log(error);
      return thunkAPI.rejectWithValue();
    }
  },
);
