import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiWrapper } from 'utils/reduxUtils';
import { getAllApi, getDataByIdApi, postApi, putApi, delApi } from 'api/crud';
import {
  convertRequestParams,
  convertResponseData,
  PRIMARY_KEY,
} from './dataProvider';

export const getAll = (resource, customApiResource) =>
  createAsyncThunk(`${resource}/getAll`, async (payload = {}, thunkAPI) => {
    try {
      const { data = {}, options = {} } = payload;
      const { pageSize, page, filter } = thunkAPI.getState()[resource] || {};
      const convertRequest = convertRequestParams(
        'GET_ALL',
        {
          limit: pageSize,
          offset: pageSize * (page - 1),
          filter,
          ...data,
        },
        resource,
      );
      const response = await apiWrapper(
        { isShowLoading: options.isShowLoading },
        getAllApi,
        options.customApiResource || customApiResource || resource,
        convertRequest,
      );

      const result = convertResponseData('GET_ALL', response);
      if (result.data) {
        return {
          data: {
            numberOfPages: Math.round(
              result.total / (data.pageSize || pageSize),
            ),
            ...result,
          },
          options,
          pagging: { pageSize, page, filter },
        };
      }
      return thunkAPI.rejectWithValue({ data: response, options });
    } catch (error) {
      return thunkAPI.rejectWithValue({});
    }
  });

export const setCurrent = (resource) =>
  createAsyncThunk(`${resource}/setCurrent`, async (payload, thunkAPI) => {
    try {
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue({ data: error });
    }
  });

export const getDataById = (resource, customApiResource) =>
  createAsyncThunk(`${resource}/getDataById`, async (payload, thunkAPI) => {
    const { data, options = { isRequestApi: true } } = payload;
    try {
      if (!options.isRequestApi) {
        return data;
      }
      const response = await apiWrapper(
        { isShowLoading: options.isShowLoading },
        getDataByIdApi,
        options.customApiResource || customApiResource || resource,
        data[PRIMARY_KEY],
        options.extraParams,
      );
      const result = convertResponseData('GET_BY_ID', response);
      if (result) {
        return { data: result };
      }
      return thunkAPI.rejectWithValue({ data: result, options });
    } catch (error) {
      return thunkAPI.rejectWithValue({ data: error, options });
    }
  });

export const edit = (resource, customApiResource) =>
  createAsyncThunk(`${resource}/edit`, async (payload, thunkAPI) => {
    const { data, options = {} } = payload;
    try {
      if (options.isCacheLocal) {
        return { data };
      }
      const convertRequest = convertRequestParams('EDIT', data, resource);
      const response = await apiWrapper(
        { isShowLoading: options.isShowLoading, ...options },
        putApi,
        options.customApiResource || customApiResource || resource,
        data[PRIMARY_KEY],
        convertRequest,
      );
      const result = convertResponseData('EDIT', response);
      if (result) {
        return { data: { ...data, ...result } };
      }
      return thunkAPI.rejectWithValue({ data: { ...data, ...response } });
    } catch (error) {
      return thunkAPI.rejectWithValue({ data: error, options });
      //
    }
  });

export const create = (resource, customApiResource) =>
  createAsyncThunk(`${resource}/create`, async (payload, thunkAPI) => {
    const { data, options = {} } = payload;
    try {
      if (options.isCacheLocal) {
        return { data };
      }
      const response = await apiWrapper(
        { isShowLoading: options.isShowLoading, ...options },
        postApi,
        options.customApiResource || customApiResource || resource,
        data,
      );
      const result = convertResponseData('CREATE', response);
      if (result) {
        return { data: result };
      }
      return thunkAPI.rejectWithValue({ data: response });
    } catch (error) {
      return thunkAPI.rejectWithValue({});
    }
  });

export const del = (resource, customApiResource) =>
  createAsyncThunk(`${resource}/del`, async (payload, thunkAPI) => {
    const { data, options = {} } = payload;
    try {
      if (options.isCacheLocal) {
        return { data };
      }

      const response = await apiWrapper(
        { isShowLoading: true },
        delApi,
        options.customApiResource || customApiResource || resource,
        data.path || data[PRIMARY_KEY],
      );
      const result = convertResponseData('DELETE', response);
      if (result.success) {
        return { data, options };
      }
      return thunkAPI.rejectWithValue({ data: response });
    } catch (error) {
      return thunkAPI.rejectWithValue({ data, options, error });
    }
  });

export const clear = (resource) =>
  createAsyncThunk(`${resource}/clear`, async () => ({}));

export const makeActions = (resource, customApiResource) => ({
  getAll: getAll(resource, customApiResource),
  getDataById: getDataById(resource, customApiResource),
  edit: edit(resource, customApiResource),
  create: create(resource, customApiResource),
  del: del(resource, customApiResource),
  setCurrent: setCurrent(resource),
  clear: clear(resource),
});
