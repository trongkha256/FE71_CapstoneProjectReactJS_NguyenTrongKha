import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    // user: {
    //     // takKhoan: "khanguyen",
    //     // email: "kha@gmail.com",
    //     // accessToken: "abc123"

    // }
    user: JSON.parse(localStorage.getItem("user") as string) || null
}

export const login = createAsyncThunk(
    "auth/login",
    async (values) => {
        try {
            // const data=await authAPI.login(values)
            const data = { name: "AAAA" }
            //lưu thông in user xuống local storage
            localStorage.setItem("user", JSON.stringify(data))
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