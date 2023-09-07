import { loginThunk } from "./auth-thunk";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    token: '',
    isLoading: false,
    error: '',
}

const handlePending = (state, {payload}) => { 
    state.isLoading = true;

 }

const handleFulfilled = (state, {payload}) => {
    state.isLoading = false;
    state.error = '';
    state.token = payload
  }

const handleRejected = (state, {payload}) => { 
    state.isLoading = false;
    state.error = '';

 }

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(loginThunk.pending, handlePending)
        .addCase(loginThunk.fulfilled, handleFulfilled)
        .addCase(loginThunk.rejected, handleRejected)
    },
})

export const authReducer = authSlice.reducer