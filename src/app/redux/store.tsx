import { configureStore } from "@reduxjs/toolkit";
import inputSearchSlice from "./slices/inputSearchSlice";
import movieReducer from "./slices/movieSlice";
import movieTypeSlice from "./slices/movieTypeSlice";
import movieGenreSlice from "./slices/movieGenreSlice";

export const store = configureStore({
    reducer: {
        input: inputSearchSlice,
        movie: movieReducer,
        movieTypeData: movieTypeSlice,
        movieGenreData: movieGenreSlice
    }

})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch