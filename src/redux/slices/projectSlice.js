import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { Toast } from '../../toasts';
const api = "https://aceiny.tech:3033"

const initialState = {
    projects : null,
    fetchinProjects : false
}
export const createProject = createAsyncThunk(
    'project/createProject',
    async (data) => {
        try {
            const response = await axios.post(`${api}/projects/create`, data , {headers: {token: localStorage.getItem('token')}})
            return response
        }catch(err){
            return err.response
        }
    }

)
export const fetchProjects = createAsyncThunk(
    'project/fetchProjects',
    async (id) => {
        try {
            const response = await axios.get(`${api}/projects/business/${id}`, {headers: {token: localStorage.getItem('token')}})
            return response
        }catch(err){
            return err.response
        }
    }
)
const projectSlice = createSlice({
    name : 'project',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProjects.pending, (state, action) => {
                state.fetchinProjects = true
            })
            .addCase(fetchProjects.fulfilled, (state, action) => {
                console.log(action.payload)
                state.fetchinProjects = false
                state.projects = action.payload.data.data
                
            })
            .addCase(createProject.pending, (state, action) => {
                state.fetchinProjects = true
            })
            .addCase(createProject.fulfilled, (state, action) => {
                state.fetchinProjects = false
                if(action.payload.status === 200){
                    Toast('Project Created Successfully','success')
                }
                else {
                    Toast('Error Creating Project','error')
                }
            })
    }
})

export default projectSlice.reducer