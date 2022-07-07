import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieAPI from "../Service/movieAPI";
import { Movie } from "../interface/movie";

interface State {
    movies: Movie[];
    isLoading: boolean;
    error: string | null;
}

const initialState: State = {
    movies: [],
    isLoading: false,
    error: null,
}

export const getMovieShowing = createAsyncThunk(
    'movie/getMovieShowing',
    async () => {
        try {
            const data = await movieAPI.getMovieShowing();
            return data;
        }
        catch (error) {
            throw error;
        }
    }
)

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getMovieShowing.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getMovieShowing.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.movies = payload;
        });
        builder.addCase(getMovieShowing.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error as any;
        })
    }
})
//export action:

// export reducer:
export default movieSlice.reducer