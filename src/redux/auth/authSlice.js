import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshUser,
  uploadAvatar,
  changeUserName,
} from 'redux/auth/operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null, avatarUrl: null, userId: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder.addCase(registerUser.fulfilled, (state, actions) => {
      state.user = actions.payload.data.user;
      state.token = actions.payload.data.token;
      state.isLoggedIn = true;
      toast.info(`Successfully registered`);
    });
    builder.addCase(loginUser.fulfilled, (state, actions) => {
      state.user = actions.payload.data.user;
      state.token = actions.payload.data.token;
      state.isLoggedIn = true;
      toast.info(`Successfully logged in`);
    });
    builder.addCase(logoutUser.fulfilled, state => {
      state.user = { name: null, email: null, userId: null, avatarURL: null };
      state.token = '';
      state.isLoggedIn = false;
      toast.info(`Successfully logged out`);
    });
    builder.addCase(refreshUser.pending, state => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshUser.fulfilled, (state, actions) => {
      state.user = actions.payload.data.user;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    });
    builder.addCase(refreshUser.rejected, state => {
      state.isRefreshing = false;
    });
    builder.addCase(uploadAvatar.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(uploadAvatar.fulfilled, (state, action) => {
      state.loading = false;
      state.user = {
        ...state.user,
        avatarURL: action.payload.data.user.avatarURL,
      };
    });
    builder.addCase(uploadAvatar.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(changeUserName.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(changeUserName.fulfilled, (state, action) => {
      state.loading = false;
      state.user = { ...state.user, name: action.payload.data.user.name };
    });
    builder.addCase(changeUserName.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default authSlice.reducer;
