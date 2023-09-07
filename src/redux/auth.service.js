import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://connections-api.herokuapp.com';

  const setToken = (token) => {
    axios.defaults.headers.common.Authorization  = `Bearer ${token}`;
   }

   export const delToken = (token) => {
    delete axios.defaults.headers.common.Authorization
   }

//   {name: 'Bohdan', email: 'bohdanshveda@gmail.com', password: 'qwerty123'}

  export const signUp = (body) => {
    return axios.post('/users/signup', body);
}

export const login = async (body) => {
  const {data} = await axios.post('/users/login', body)
  setToken(data.token)
  return data
}

export const logOut = async (body) => {
  const {data} = await axios.post('/users/logout', body)
  delToken(data.token)
  return data
}

export const getProfile = async () => {
  const {data} = await axios.get('/users/current')
  return data
}

//   export const signUp = createAsyncThunk(
//     async (body, thunkAPI) => {
//       try {
//         const response = await axios.post('/user/signup', body);
//         console.log(response.data)
//         return response.data;
//       } catch (e) {
//         return thunkAPI.rejectWithValue(e.message);
//       }
//     }
//   );

//   export const signUp = async (body) => {
//     try {
//       const response = await axios.post('/user/signup', body);
//       console.log(response.data);
//       return response.data;
//     } catch (e) {
//       throw e;
//     }
//   };

