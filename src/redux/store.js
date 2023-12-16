import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./slices/authSlice"
import businessReducer from './slices/businessSlice'
import projectReducer from './slices/projectSlice'
const store =configureStore({
    reducer:{
        auth:authReducer,
        business:businessReducer,
        projects:projectReducer
    }
})
export default store 