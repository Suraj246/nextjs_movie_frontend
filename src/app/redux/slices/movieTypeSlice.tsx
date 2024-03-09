import { Api, movieCardTypes } from "@/app/Api";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface initialStateType {
    status: 'loading' | 'success' | 'failed';
    error: string | null
    movietypeData: movieCardTypes[]
}

const initialState: initialStateType = {
    status: 'loading',
    error: null,
    movietypeData: []
}



export const fetchDataByType = createAsyncThunk("movietypeData/fetchDataByType", async (movieType: string | null) => {
    try {
        const { data } = await axios.get(`${Api}/movieData/type/${movieType}`)
        if (!data.movie) {
            throw new Error('No data found')
        }
        return data.movie

    } catch (error) {
        return error
    }
})



export const movieTypeSlice = createSlice({
    name: "movieTypeData",
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchDataByType.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchDataByType.fulfilled, (state, action: PayloadAction<movieCardTypes[]>) => {
                state.status = 'success'
                state.movietypeData = action.payload
                state.error = ''

            })
            .addCase(fetchDataByType.rejected, (state, action) => {
                state.status = 'failed'
                state.movietypeData = []
                state.error = action.error.message || 'Failed to fetch'
            })


    }
})

export default movieTypeSlice.reducer