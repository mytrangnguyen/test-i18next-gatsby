import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';

export const pushUpdatedReducer = createAction('app/pushUpdatedReducer');
export const clearUpdatedReducer = createAction('app/clearUpdatedReducer');

export const INITIAL_STATE = {
  oneSignalUserId: null,
  language: 'en',
  loading: null,
  setting: {},
  updatedReducers: {},
  currentPickupPoint: {},
};

export const startup = createAsyncThunk(
  'app/startup',
  async (payload, thunkAPI) => {
    try {
      return payload;
    } catch (error) {
      // console.log(error);
      return thunkAPI.rejectWithValue();
    }
  },
);

export const setOneSignalToken = createAsyncThunk(
  'app/setOneSignalToken',
  async (payload, thunkAPI) => {
    try {
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

const loadingReducer = (state) => {
  state.loading = true;
};
const clearLoadingReducer = (state) => {
  state.loading = false;
};

const setSettingReducer = (state, { payload }) => {
  state.setting = { ...state.setting, ...payload };
};

const setLocaleReducer = (state, { payload }) => {
  state.language = payload;
};

const setOneSignalTokenReducer = (state, { payload }) => {
  state.oneSignalUserId = payload;
};

const appSlice = createSlice({
  name: 'app',
  initialState: INITIAL_STATE,
  reducers: {
    startup: () => {},
    loading: loadingReducer,
    clearLoading: clearLoadingReducer,
    setSetting: setSettingReducer,
    setLocale: setLocaleReducer,
    setCurrentPickupPoint: (state, { payload }) => {
      state.currentPickupPoint = payload;
    },
  },
  extraReducers: {
    [clearUpdatedReducer]: (state) => {
      state.updatedReducers = {};
    },
    [pushUpdatedReducer]: (state, { payload }) => {
      state.updatedReducers[payload.reduder] = state.updatedReducers[
        payload.reduder
      ]
        ? [...state.updatedReducers[payload.reduder], payload.serverAction]
        : [payload.serverAction];
    },
    [startup.fulfilled]: () => {},
    [setOneSignalToken.fulfilled]: setOneSignalTokenReducer,
  },
});

const { actions, reducer } = appSlice;
export const {
  setLocale,
  setSetting,
  clearLoading,
  loading,
  setCurrentPickupPoint,
} = actions;
export default reducer;
