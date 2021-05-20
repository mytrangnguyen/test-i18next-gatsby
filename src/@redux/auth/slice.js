import { createSlice } from '@reduxjs/toolkit';
import { getToken } from 'utils';
import {
  changePassword,
  checkAuth,
  createInstallation,
  deleteInstallation,
  getCurrentUser,
  login,
  loginFacebook,
  loginGoogle,
  logout,
  register,
  skipLogin,
  updateCurrentUser,
  verifyPhoneNumber,
} from './actions';

export const initialState = {
  isAuthenticated: getToken(),
  data: {},
  role: null,
  loginError: false,
  loginSuccess: false,
  permissionData: null,
  token: null,
  isSkipLogin: false,
  refreshToken: null,
  authModal: { isOpenLoginModal: false, isOpenRegisterModal: false },
};

const { actions, reducer } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getPermissionsSuccess: (state, { payload }) => {
      state.loading = false;
      state.permissionData = payload;
    },
    getPermissionsFail: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    subscribeUser: (state) => {
      state.loading = true;
    },
    subscribeUserSuccess: (state) => {
      state.loading = false;
    },
    subscribeUserFail: (state, { payload }) => {
      state.error = payload.error;
      state.loading = false;
    },
    setIsOpenLoginModal: (state) => {
      state.authModal.isOpenLoginModal = !state.authModal.isOpenLoginModal;
    },
    setIsOpenRegisterModal: (state) => {
      state.authModal.isOpenRegisterModal = !state.authModal
        .isOpenRegisterModal;
    },
  },
  extraReducers: {
    [checkAuth.fulfilled]: (state, { payload }) => {
      state.isAuthenticated = payload;
    },
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.isAuthenticated = true;
      state.data = payload.data;
      state.token = payload.token;
      state.loginError = false;
      state.loginSuccess = true;
      state.loading = false;
      state.refreshToken = payload.refreshToken;
    },
    [login.rejected]: (state) => {
      state.isAuthenticated = false;
      state.loading = false;
    },

    [loginGoogle.fulfilled]: (state, { payload }) => {
      state.isAuthenticated = true;
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
    },

    [loginFacebook.fulfilled]: (state, { payload }) => {
      state.isAuthenticated = true;
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
    },

    [register.pending]: (state) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.token = payload.token;
      state.isAuthenticated = true;
      state.data = payload.data;
      state.loginError = false;
      state.refreshToken = payload.refreshToken;
    },
    [register.rejected]: (state) => {
      state.loading = false;
    },
    [getCurrentUser.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.role = payload.role;
    },
    [logout.fulfilled]: (state) => {
      state.isAuthenticated = false;
      state.data = null;
      state.token = null;
    },
    [updateCurrentUser.pending]: (state) => {
      state.loading = true;
    },
    [updateCurrentUser.fulfilled]: (state) => {
      state.loading = false;
      // state.data = { ...state.data, ...payload };
    },
    [updateCurrentUser.rejected]: (state) => {
      state.loading = false;
    },
    [changePassword.pending]: (state) => {
      state.loading = true;
    },
    [changePassword.fulfilled]: (state) => {
      state.loading = false;
    },
    [changePassword.rejected]: (state) => {
      state.loading = false;
    },
    [verifyPhoneNumber.fulfilled]: (state, { payload }) => {
      state.isAuthenticated = true;
      state.data = payload;
      state.loginError = false;
      state.loginSuccess = true;
      state.token = payload.token;
    },
    [skipLogin.fulfilled]: (state) => {
      state.isSkipLogin = true;
    },
    [createInstallation.fulfilled]: (state, { payload }) => {
      state.installationId = payload.id;
    },
    [deleteInstallation.fulfilled]: (state) => {
      state.installationId = null;
    },
  },
});

export const { setIsOpenLoginModal, setIsOpenRegisterModal } = actions;

export default reducer;
