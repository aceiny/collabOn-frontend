import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./slices/authSlice"
import businessReducer from './slices/businessSlice'
const store =configureStore({
    reducer:{
        auth:authReducer,
        business:businessReducer,
    }
})
export default store 