import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Toast } from "../../toasts";
const api = "https://aceiny.tech:3033"

const initialState = {
    business : null,
    pendingBusiness : false,
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
        }
    }
)
export default businessSlice.reducer