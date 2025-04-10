import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userState } from "../types";
import { act } from "react";

interface authState {
    userInfo: userState
    loading: boolean
    error: string;

}

const initialState: authState = {
    userInfo: {
        success: false,
        user: {
            role: "",
            isAuthenticated: false,
            isFormCompleted: false,
            token: ""
        }
    },
    loading: false,
    error: ""
}

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginRequest: (state) => {
            state.loading = true
        },
        loginSuccess: (state, action: PayloadAction<userState>) => {
            state.userInfo = action.payload;
            state.loading = false
        },
        loginFailure: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

export const { loginRequest, loginSuccess, loginFailure } = auth.actions
export default auth.reducer