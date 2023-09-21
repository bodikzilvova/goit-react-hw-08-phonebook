import {
  getProfileThunk,
  logOutThunk,
  loginThunk,
  signUpThunk,
} from './auth-thunk';
const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

const initialState = {
  token: '',
  isLoading: false,
  error: '',
  user: { name: null, email: null },
  isLoggedIn: false,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.token = payload.token;
  state.user = payload.user;
  state.isLoggedIn = true;
};

const handleFulfilledRegistretion = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.token = payload.token;
  state.user = payload.user;
  state.isLoggedIn = true;
};

const handleFulfilledProfile = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.user = payload.user;
  state.isLoggedIn = true;
};
const handleFulfilledLogOut = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.user = { name: null, email: null };
  state.token = '';
  state.isLoggedIn = false;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, handleFulfilled)
      .addCase(signUpThunk.fulfilled, handleFulfilledRegistretion)
      .addCase(getProfileThunk.fulfilled, handleFulfilledProfile)
      .addCase(logOutThunk.fulfilled, handleFulfilledLogOut)
      .addMatcher(
        isAnyOf(
          loginThunk.pending,
          getProfileThunk.pending,
          logOutThunk.pending,
          signUpThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          loginThunk.rejected,
          getProfileThunk.rejected,
          logOutThunk.rejected,
          signUpThunk.rejected
        ),
        handleRejected
      );
  },
});

export const authReducer = authSlice.reducer;
