import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Toast } from "../../toasts";
const api = "https://aceiny.tech:3033"

const initialState = {
    business : null,
    pendingBusiness : false,
    workers : null
}

export const CreateBusiness = createAsyncThunk(
    'business/create',
    async (data) => {
        try {
            const response = await axios.post(`${api}/business/create`, data)
            return response
        }catch(err){
            return err.response
        }
    }
)
export const GetBusiness = createAsyncThunk(
    'business/get',
    async (data) => {
        try {
            const response = await axios.get(`${api}/business/`, {headers: {token: localStorage.getItem('token')}})
            return response
        }catch(err){
            return err.response
        }
    }

)
export const getWorker = createAsyncThunk(
    'business/getWorkers',
    async (id) => {
        try {
            const response = await axios.get(`${api}/business/workers/${id}`, )
            return response
        }catch(err){
            return err.response
        }
    }
)
export const createWorker = createAsyncThunk(
    'business/createWorker',
    async (data) => {
        try {
            const response = await axios.post(`${api}/business/worker/create`, data)
            return response
        }catch(err){
            return err.response
        }
    }
)
const businessSlice = createSlice(
    {
        name : 'business',
        initialState,
        reducers : {

        },
        extraReducers : (builder) => {
            builder
                .addCase(CreateBusiness.pending, (state, action) => {
                    state.pendingBusiness = true
                })
                .addCase(CreateBusiness.fulfilled, (state, action) => {
                    state.pendingBusiness = false
                    if (action.payload.status === 200) {
                        state.business = action.payload.data
                        Toast("welcome enjoy the stay","success")
                    }else {
                        Toast("something Went wrong","error")
                    }
                })
                .addCase(GetBusiness.pending, (state, action) => {
                    state.pendingBusiness = true
                })
                .addCase(GetBusiness.fulfilled, (state, action) => {
                    state.pendingBusiness = false
                    console.log(action.payload)
                    if (action.payload.status === 200) {
                        state.business = action.payload.data.data
                    }else {
                        //else logique 
                    }
                })
                .addCase(createWorker.pending, (state, action) => {
                    state.pendingBusiness = true
                })
                .addCase(createWorker.fulfilled, (state, action) => {
                    state.pendingBusiness = false
                    console.log(action.payload)
                    if (action.payload.status === 200) {
                        state.business = action.payload.data
                        Toast('worker created','success')
                    }else {
                        //else logique 
                    }
                })
                .addCase(getWorker.pending, (state, action) => {
                    state.pendingBusiness = true
                })
                .addCase(getWorker.fulfilled, (state, action) => {
                    state.pendingBusiness = false
                    console.log(action.payload)
                    if (action.payload.status === 200) {
                        state.workers = action.payload.data.data
                    }else {
                        //else logique 
                    }
                })
                
        }
    }
)
export default businessSlice.reducer