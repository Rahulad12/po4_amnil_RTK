import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userState } from "../types";

interface authState {
    userInfo: userState
    loading: boolean
    error: string
}

const initialState: authState = {
    userInfo: {
        success: false,
        user: {
            role: localStorage.getItem("role") || "",
            isAuthenticated: localStorage.getItem("isAuthenticated") === "true" ? true : false,
            isFormCompleted: false,
            token: localStorage.getItem("token") || "",
        },
        message: "",
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
        setCredentials: (state, action: PayloadAction<userState>) => {
            state.userInfo = action.payload;
            state.loading = false
            state.error = "";

            const { role, isAuthenticated, token } = action.payload.user;
            localStorage.setItem("role", role);
            localStorage.setItem("isAuthenticated", isAuthenticated.toString());
            localStorage.setItem("token", token);

        },
        loginFailure: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        }

    }
})

export const { loginRequest, setCredentials, loginFailure } = auth.actions
export default auth.reducer