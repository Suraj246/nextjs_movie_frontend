import { Api, movieCardTypes } from "@/app/Api";
import { updateMovieObjType } from "@/app/types";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface initialStateType {
    status: 'loading' | 'success' | 'failed';
    movies: movieCardTypes[];
    error: string | null
}

const initialState: initialStateType = {
    status: 'loading',
    movies: [],
    error: null,
}

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
    try {
        const { data } = await axios.get(`${Api}/movieData`)
        if (!data.movies) {
            throw new Error('No data')
        }
        const MovieData = await data.movies
        return MovieData
    }
    catch (error: any) {
        throw error
    }
})

export const updateMovieData = createAsyncThunk("movies/updateMovieData", async ({ movieId, updateMovie, description }: { movieId: string | string[], updateMovie: updateMovieObjType, description: string }) => {
    try {
        const { data } = await axios.put(`${Api}/movieData/update/${movieId}`, { updateMovie, description })
        if (!data.movies) {
            throw new Error('No data updated')
        }
        return data.movies

    } catch (error) {
        return error
    }
})



export const deleteMovie = createAsyncThunk("movies/deleteMovie", async (movieId: string) => {
    try {
        return axios.delete(`${Api}/movieData/${movieId}`)
    } catch (error: any) {
        throw error
    }
})

export const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        // filterMovieGenreGroup(state, action) {

        //     const filteredMovies = state.movies.filter(m => m.genre.toLowerCase().includes(action.payload));
        //     state.movies = filteredMovies
        //     // state.movies = filteredMovies.length > 0 ? filteredMovies : state.movies;
        // },
        // filterMovieTypeGroup(state, action) {
        //     const filteredMovies = state.movies.filter(m => m.type.toLowerCase().includes(action.payload));
        //     state.movies = filteredMovies
        // },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchMovies.fulfilled, (state, action: PayloadAction<movieCardTypes[]>) => {
                state.status = 'success'
                state.movies = action.payload
                state.error = ''

            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.status = 'failed'
                state.movies = []
                state.error = action.error.message || 'Failed to fetch'
            })



            .addCase(deleteMovie.fulfilled, (state, action) => {
                const deletedMovieId = action.meta.arg;
                state.movies = state.movies.filter(m => m._id !== deletedMovieId)
            })

    }
})

// export const { filterMovieGenreGroup } = movieSlice.actions;
export default movieSlice.reducer