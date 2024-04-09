import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userWindow: false,
}

const windowSlice = createSlice({
    name: "window_slice",
    initialState,
    reducers: {
        toggleUserWindow: (state) => {
            state.userWindow = !state.userWindow;
        },
        showUserWindow: (state) => {
            state.userWindow = true;
        },
        hideUserWindow: (state) => {
            state.userWindow = false;
        }
    }
})

export const {toggleUserWindow, showUserWindow, hideUserWindow} = windowSlice.actions;
export default windowSlice.reducer;