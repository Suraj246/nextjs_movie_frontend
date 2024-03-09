import { Api, movieCardTypes } from "@/app/Api";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface initialStateType {
    status: 'loading' | 'success' | 'failed';
    error: string | null
    movieGenreData: movieCardTypes[]
}

const initialState: initialStateType = {
    status: 'loading',
    error: null,
    movieGenreData: []
}



export const fetchDataByGenre = createAsyncThunk("movieGenreData/fetchDataByGenre", async (movieGenre: string | null) => {
    try {
        const { data } = await axios.get(`${Api}/movieData/genre/${movieGenre}`)

        if (!data.movie) {
            throw new Error('No data found')
        }
        return data.movie

    } catch (error) {
        return error
    }
})



export const movieGenreSlice = createSlice({
    name: "movieGenreData",
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchDataByGenre.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchDataByGenre.fulfilled, (state, action: PayloadAction<movieCardTypes[]>) => {
                state.status = 'success'
                state.movieGenreData = action.payload
                state.error = ''

            })
            .addCase(fetchDataByGenre.rejected, (state, action) => {
                state.status = 'failed'
                state.movieGenreData = []
                state.error = action.error.message || 'Failed to fetch'
            })


    }
})

export default movieGenreSlice.reducer