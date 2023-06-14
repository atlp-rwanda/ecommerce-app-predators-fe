
import {getAllUsers} from '../action/disableAction'
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {registerUser} from '../action/UserAction'

const getAllUsersSlice = createSlice({
    name: 'getAllUsers',
    initialState: {
        data: [],
        status: '',
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllUsers.pending, (state) => {
                state.loading = true;
                state.status = 'Loading...';
                state.error = null;
            }
            )
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.status = 'Success';
                state.data = action.payload;
                state.error = null;
            }
            )
            .addCase(getAllUsers.rejected, (state) => {
                state.loading = false;
                state.status = 'Failed';
                state.error = null;
            }
            );
    }
});
const userSlice = createSlice({
    name: "user",
    initialState: {
        data: [],
        status: "",
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.status = "Loading...";
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.status = "Registration successful!";
                state.data = action.payload;
                state.error = null;
                toast.success("Registration successful!");
            })
            .addCase(registerUser.rejected, (state) => {
                state.loading = false;
                state.status = "Registration failed. Please try again.";
                state.error = null;
                toast.error("Registration failed. Please try again.");
            })
    }
});
export default userSlice.reducer;