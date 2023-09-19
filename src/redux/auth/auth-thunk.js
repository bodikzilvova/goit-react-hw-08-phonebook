import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProfile, logOut, login, setToken } from './auth.service';


export const loginThunk = createAsyncThunk(
  'users/login',
  async (body, { dispatch }) => {
    try {
      const data = await login(body);
      dispatch(getProfileThunk());
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const logOutThunk = createAsyncThunk('users/logout', async body => {
  try {
    const data = await logOut(body);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const getProfileThunk = createAsyncThunk('users/current', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === ''){
    return thunkAPI.rejectWithValue('Something went wrong')
  }
  try {
    setToken(persistedToken)
    const data = await getProfile();
    return data;
  } catch (error) {
    throw error;
  }
});
