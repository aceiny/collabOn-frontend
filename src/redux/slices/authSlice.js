import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
const api = "https://aceiny.tech:3033"

const initialState = {
      status: 'idle',
      error: null,
      token: null,
      isAuthenticated: localStorage.getItem('token') ? true : false,
      isAuthenticating: false,
}

export const login = createAsyncThunk(
      'auth/login',
      async (data) => {
         try {
            const response = await axios.post(`${api}/auth/login`, data)
            return response
         }catch(err){
            return err.response
         }
      }
)
export const signup = createAsyncThunk(
   'auth/signup',
   async (data) => {
      try {
         const response = await axios.post(`${api}/auth/signup`, data)
         return response
      }catch(err){
         console.log(err.response)
         return err.response
      }
   }
)
const authSlice = createSlice({
   name : 'auth',
   initialState,
   reducers: {
      logout(state, action){
         state.isAuthenticated = false
         state.user = null
         state.token = null
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(login.pending, (state, action) => {
            state.isAuthenticating = true
         })
         .addCase(login.fulfilled, (state, action) => {
            state.isAuthenticating = false
            if (action.payload.status === 200) {
               state.isAuthenticated = true
               localStorage.setItem('token', action.payload.data.token)
               state.token = action.payload.data.token
            } else {
               state.isAuthenticated = false
               state.user = null
               state.token = null
            }
         })
         .addCase(signup.pending, (state, action) => {
            state.isAuthenticating = true
         })
         .addCase(signup.fulfilled, (state, action) => {
            state.isAuthenticating = false
            if (action.payload.status === 200) {
               console.log(action.payload)
               state.isAuthenticated = true
               localStorage.setItem('token', action.payload.data.token)
               state.token = action.payload.data.data
               console.log(action.payload.data.user)
               state.user = action.payload.data.user
            } else {
               console.log(action.payload , 'failed')
               state.isAuthenticated = false
               state.user = null
               state.token = null
            }
         })

   }
})

export const {logout} = authSlice.actions
export default authSlice.reducer