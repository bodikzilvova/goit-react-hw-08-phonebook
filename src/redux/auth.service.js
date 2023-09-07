import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://connections-api.herokuapp.com';


//   {name: 'Bohdan', email: 'bohdanshveda@gmail.com', password: 'qwerty123'}

  export const signUp = (body) => {
    return axios.post('/users/signup', body);
}

export const login = (body) => {
  const {data} = axios.post('/users/login', body)
  console.log(data)
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

