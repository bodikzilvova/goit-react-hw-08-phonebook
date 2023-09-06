import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://connections-api.herokuapp.com';

  export const signUp = createAsyncThunk(
    async (body, thunkAPI) => {
      try {
        const response = await axios.post('/user/signup', body);
        console.log(response.data)
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );