import { createSlice } from '@reduxjs/toolkit';
import { getConfig, setModalConfig } from './actions';

export const initialState = {
  modals: {},
  error: null,
  data: {},
};

const { reducer } = createSlice({
  name: 'config',
  initialState,
  reducers: {},
  extraReducers: {
    [getConfig.fulfilled]: (state, { payload }) => {
      state.data = payload;
    },
    [getConfig.rejected]: (state, { payload }) => {
      state.error = payload || null;
    },
    [setModalConfig.fulfilled]: (state, { payload }) => {
      state.modals = payload;
    },
  },
});

export default reducer;
