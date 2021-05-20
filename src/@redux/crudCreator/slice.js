import { createSlice } from '@reduxjs/toolkit';
import _, { union } from 'lodash';

import { PRIMARY_KEY } from './dataProvider';

export const INITIAL_STATE = {
  loading: false,
  itemLoadings: {},
  error: null,
  data: {},
  ids: [],
  currentId: null,
  filter: {},
  page: 1,
  pageSize: 20,
  total: 0,
  numberOfPages: 1,
  sort: '',
  currentData: {},
};

// getAll

export const clear = (state) => {
  state.loading = false;
  state.ids = [];
  state.data = {};
  state.total = 0;
  state.numberOfPages = 1;
};

export const getAll = (state, { meta: { arg = {} } }) => {
  const { data = {}, options = {} } = arg;
  if (options.isRefresh) {
    // eslint-disable-next-line
    state = {
      ...state,
      ...INITIAL_STATE,
      loading: true,
      ...data,
      currentData: state.currentData,
    };
  } else {
    // eslint-disable-next-line
    state = {
      ...state,
      loading: true,
      error: null,
      page: state.page + 1,
      offset: state.offset + state.limit,
      ...data,
    };
  }
  return state;
};

export const getAllSuccess = (
  state,
  { payload: { data, pagging, options } },
) => {
  // console.log(pagging)
  // if (options.isRefresh) {
  //   // eslint-disable-next-line
  //   state = {
  //     ...state,
  //     ...INITIAL_STATE,
  //     loading: true,
  //     ...pagging,
  //     currentData: state.currentData,
  //   };
  // } else {
  //   // eslint-disable-next-line
  //   state = {
  //     ...state,
  //     loading: true,
  //     error: null,
  //     page: state.page + 1,
  //     offset: state.offset + state.limit,
  //     ...pagging,
  //   };
  // }

  state.loading = false;
  state.ids = options.isRefresh ? data.ids : union(state.ids, data.ids);
  state.data = options.isRefresh ? data.data : { ...state.data, ...data.data };
  state.total = data.total;
  state.page = pagging.page;
  state.numberOfPages = data.numberOfPages;
  return state;
};

export const getAllFailure = (state, { payload }) => {
  state.loading = false;
  state.error = payload?.data || null;
  return state;
};

// getOne

export const getDataById = (state, e) => {
  const {
    meta: {
      arg: { data },
    },
  } = e;
  state.currentId = data[PRIMARY_KEY];
  state.loading = true;
  state.itemLoadings[data[PRIMARY_KEY]] = true;
  state.currentData = data;
  return state;
};

export const setCurrent = (state, { payload }) => {
  state.currentData = payload;
  return state;
};

export const getDataByIdSuccess = (state, { payload: { data } }) => {
  state.data = { ...state.data, [data?.[PRIMARY_KEY]]: data };
  state.loading = false;
  state.currentData = data;
  state.itemLoadings[data?.[PRIMARY_KEY]] = false;
  return state;
};

export const getDataByIdFailure = (state, { payload: { data } }) => {
  state.error = data || null;
  state.loading = false;
  state.itemLoadings[data[PRIMARY_KEY]] = false;
  return state;
};

export const create = (state) => {
  state.error = null;
  state.loading = false;
  return state;
};

export const createSuccess = (state, { payload: { data } }) => {
  state.data = { ...state.data, [data[PRIMARY_KEY]]: data };
  state.loading = false;
  state.ids = [...state.ids, data[PRIMARY_KEY]];
  state.currentId = data.id;
  state.error = null;
  return state;
};

export const createFailure = (state, { payload: { data } }) => {
  state.error = data || null;
  state.loading = false;
  return state;
};

// Edit

export const edit = (
  state,
  {
    meta: {
      arg: { data },
    },
  },
) => {
  state.error = null;
  state.loading = true;
  state.itemLoadings = { ...state.itemLoadings, [data[PRIMARY_KEY]]: true };
  return state;
};

export const editSuccess = (state, { payload: { data } }) => {
  state.error = null;
  state.loading = true;
  state.data = {
    ...state.data,
    [data[PRIMARY_KEY]]: { ...state.data[data[PRIMARY_KEY]], ...data },
  };
  state.currentData = data;
  state.itemLoadings = { ...state.itemLoadings, [data[PRIMARY_KEY]]: false };
  return state;
};

export const editFailure = (state, { payload: { data } }) => {
  state.error = data || null;
  state.itemLoadings = { ...state.itemLoadings, [data[PRIMARY_KEY]]: false };
  return state;
};

// Delete

export const del = (
  state,
  {
    meta: {
      arg: { data },
    },
  },
) => {
  state.error = null;
  state.itemLoadings = data[PRIMARY_KEY]
    ? { ...state.itemLoadings, [data[PRIMARY_KEY]]: true }
    : null;
  return state;
};

export const delSuccess = (state, { payload: { data } }) => {
  delete state.data[data[PRIMARY_KEY]];
  state.error = null;
  state.currentId = null;
  state.itemLoadings = data[PRIMARY_KEY]
    ? { ...state.itemLoadings, [data[PRIMARY_KEY]]: null }
    : null;
  state.ids = _.xor(state.ids, [data[PRIMARY_KEY]]);
  state.data = data[PRIMARY_KEY] ? state.data : {};
  return state;
};

export const delFailure = (state, { payload: { data } }) => {
  delete state.data[data[PRIMARY_KEY]];
  state.error = data || null;
  state.itemLoadings = data[PRIMARY_KEY]
    ? { ...state.itemLoadings, [data[PRIMARY_KEY]]: null }
    : null;
  return state;
};

export const makeCRUDSlice = (
  model,
  actions,
  customActions = {},
  ignoreActions = [],
) => {
  const extraReducers = {
    [actions.getAll.pending]: getAll,
    [actions.getAll.fulfilled]: getAllSuccess,
    [actions.getAll.rejected]: getAllFailure,

    [actions.getDataById.pending]: getDataById,
    [actions.getDataById.fulfilled]: getDataByIdSuccess,
    [actions.getDataById.rejected]: getDataByIdFailure,

    [actions.create.pending]: create,
    [actions.create.fulfilled]: createSuccess,
    [actions.create.rejected]: createFailure,

    [actions.edit.pending]: edit,
    [actions.edit.fulfilled]: editSuccess,
    [actions.edit.rejected]: editFailure,

    [actions.del.pending]: del,
    [actions.del.fulfilled]: delSuccess,
    [actions.del.rejected]: delFailure,

    [actions.setCurrent.fulfilled]: setCurrent,
    [actions.clear.pending]: clear,
    ...customActions,
  };

  ignoreActions.forEach((element) => {
    // eslint-disable-next-line
    const _ignoreActions = Object.keys(extraReducers).filter(
      (key) => key.indexOf(element) > -1,
    );
    _ignoreActions.forEach((e) => {
      delete extraReducers[e];
    });
  });

  const slice = createSlice({
    name: model,
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers,
  });
  return slice;
};
