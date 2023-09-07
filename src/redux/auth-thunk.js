import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "./auth.service";

export const loginThunk = createAsyncThunk('users/login', async (body)=>{
   return await login(body)
})