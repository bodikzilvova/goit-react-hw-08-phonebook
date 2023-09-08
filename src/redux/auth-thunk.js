import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProfile, logOut, login } from './auth.service';



export const loginThunk = createAsyncThunk('users/login', async body => {
  try {
    const data = await login(body);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const logOutThunk = createAsyncThunk('users/logout', async body => {
  try {
    const data = await logOut(body);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const getProfileThunk = createAsyncThunk('users/current', async () => {
  try {
    const data = await getProfile();
    return data;
  } catch (error) {
    throw error;
  }
});
