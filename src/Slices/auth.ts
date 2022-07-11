import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: {
        takKhoan: "khanguyen",
        email: "kha@gmail.com",
    }
}

export const login = createAsyncThunk(
    "auth/login",
    async (values) => {
        try {
            // const data=await authAPI.login(values)
            const data = { name: "AAAA" }
            return data
        }
        catch (e) {
            throw e;
        }

    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, { payload }) => {
            // state.user = payload;
        }
        )
    }
})

export default authSlice.reducer;