import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    auth: {
        user: null
    }
}


const authSlice = createSlice({
    name: "auth_slice",
    initialState,
    reducers: {
        updateUser: (state, action) => {
            console.log("payload from authSlice",action.payload)
            state.auth.user = action.payload;
        }
    }
})


export const {updateUser} = authSlice.actions;

export default authSlice.reducer;