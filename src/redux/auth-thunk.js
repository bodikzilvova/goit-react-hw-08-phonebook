import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfile, logOut, login } from "./auth.service";


// export const loginThunk = createAsyncThunk('users/login', async (body)=>{
//     const data = await login(body)
//     console.log(data)
//  return data
//  })

export const loginThunk = createAsyncThunk('users/login', async (body, { rejectWithValue }) => {
    try {
      const data = await login(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data); // Обробка помилки і повернення її як payload
    }
  });


 export const logOutThunk = createAsyncThunk('users/logout', async (body)=>{
    const data = await logOut(body)
 return data
 })


 export const getProfileThunk = createAsyncThunk('users/current', async (_, { rejectWithValue }) => {
    try {
      const data = await getProfile();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data); // Обробка помилки і повернення її як payload
    }
  });

//  export const getProfileThunk = createAsyncThunk('users/current', async ()=>{
//     const data = await getProfile()
//     console.log(data)
//  return data
//  })