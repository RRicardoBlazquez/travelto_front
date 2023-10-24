import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: "ricardo"
}

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUsers: (state, newUsers) => {
            state.users = newUsers.payload;
        }
    }
})

export const { addUsers } = usersSlice.actions

usersSlice.reducer