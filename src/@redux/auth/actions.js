import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  loginApi,
  registerApi,
  getInfoApi,
  editUserApi,
  loginFacebookApi,
  firebaseSignInWithPhoneNumberApi,
  firebaseConfirmCodeApi,
  forgotPasswordApi,
  resendCodeResetPasswordApi,
  verifyCodeResetPasswordApi,
  resetPasswordApi,
  loginGoogleApi,
  changePasswordApi,
} from 'api/auth';
import { deleteToken, setToken } from 'utils';
// import api
import { apiWrapper } from 'utils/reduxUtils';
// import { startup } from '@redux/app/slice';

export const checkAuth = createAsyncThunk(
  'auth/checkAuth',
  async (payload, thunkAPI) => {
    try {
      return !!payload;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

export const loginWithPhoneNumber = createAsyncThunk(
  'auth/loginWithPhoneNumber',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(
        { isShowLoading: false },
        firebaseSignInWithPhoneNumberApi,
        payload,
      );
      return { success: true, response };
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

export const verifyPhoneNumber = createAsyncThunk(
  'auth/verifyPhoneNumber',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(
        { isShowLoading: true },
        firebaseConfirmCodeApi,
        payload,
      );
      if (!response || !response.token) return thunkAPI.rejectWithValue();
      global.token = response?.token;
      if (thunkAPI.getState().app.oneSignalUserId) {
        thunkAPI.dispatch(
          createInstallation(thunkAPI.getState().app.oneSignalUserId),
        );
      }
      return response;
    } catch (error) {
      // console.log('error', error);
      return thunkAPI.rejectWithValue();
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(
        { isShowLoading: true },
        loginApi,
        payload,
      );

      if (response.data.token) {
        setToken(response.data.token);
        thunkAPI.dispatch(getCurrentUser());
        return response.data;
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      // console.log('error', error);
      return thunkAPI.rejectWithValue();
    }
  },
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (payload, thunkAPI) => {
    try {
      global.token = null;
      deleteToken();
      if (thunkAPI.getState().auth.installationId) {
        thunkAPI.dispatch(deleteInstallation());
      }
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

export const register = createAsyncThunk(
  'auth/register',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(
        { isShowLoading: true },
        registerApi,
        payload,
      );

      if (response.data.token) {
        setToken(response.data.token);
        thunkAPI.dispatch(getCurrentUser());
        return response.data;
      }

      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      // console.log('error', error);
      return thunkAPI.rejectWithValue();
    }
  },
);

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(
        { isShowLoading: true },
        getInfoApi,
        payload,
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

export const updateCurrentUser = createAsyncThunk(
  'auth/updateCurrentUser',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(
        {
          isShowLoading: false,
          errorMessage: 'Email is exist',
          isShowSuccess: true,
          successMessage: 'Cập nhập thông tin thành công!',
        },
        editUserApi,
        payload,
      );

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(
        {
          isShowLoading: true,
          isShowSuccessNoti: true,
        },
        changePasswordApi,
        payload,
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(
        { isShowLoading: false },
        forgotPasswordApi,
        payload,
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

export const loginFacebook = createAsyncThunk(
  'auth/loginFacebook',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(
        { isShowLoading: false },
        loginFacebookApi,
        payload,
      );

      if (response.data.token) {
        setToken(response.data.token);
        thunkAPI.dispatch(getCurrentUser());
        return response.data;
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

export const loginGoogle = createAsyncThunk(
  'Auth/loginGoogle',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper({}, loginGoogleApi, payload);

      if (response.data.token) {
        setToken(response.data.token);
        thunkAPI.dispatch(getCurrentUser());
        return response.data;
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const skipLogin = createAsyncThunk(
  'auth/skipLogin',
  async (payload, thunkAPI) => {
    try {
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

export const createInstallation = createAsyncThunk(
  'auth/createInstallation',
  async (payload, thunkAPI) => {
    try {
      // const response = await apiWrapper(
      //   { isShowLoading: true },
      //   createInstallationApi,
      //   {
      //     oneSignalUserId: payload,
      //     deviceType: Platform.OS,
      //   },
      // );
      // return response;
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

export const deleteInstallation = createAsyncThunk(
  'auth/deleteInstallation',
  async (payload, thunkAPI) => {
    try {
      // const { installationId } = thunkAPI.getState().auth;
      // const response = await apiWrapper(
      //   { isShowLoading: true },
      //   deleteInstallationApi,
      //   installationId,
      // );
      // return response;
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

export const verifyCodeResetPassword = createAsyncThunk(
  'auth/verifyCodeResetPassword',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(
        { isShowLoading: false },
        verifyCodeResetPasswordApi,
        payload,
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

export const resendCodeResetPassword = createAsyncThunk(
  'auth/resendCodeResetPassword',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(
        { isShowLoading: false },
        resendCodeResetPasswordApi,
        payload,
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(
        { isShowLoading: false },
        resetPasswordApi,
        payload,
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);
