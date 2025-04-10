import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userState, authFailureState } from "../types";

interface authState {
    user: userState;
    error: authFailureState;
}

const initialState: authState = {
    user: {
        role: localStorage.getItem("role") || "",
        isAuthenticated: localStorage.getItem("isAuthenticated") === "true" ? true : false,
        isFormCompleted: false,
        token: localStorage.getItem("token") || "",
    },
    error: {
        email: "",
        password: "",
    }
}

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<userState>) => {
            state.user = action.payload;
            const { role, isAuthenticated, token } = action.payload;
            localStorage.setItem("role", role);
            localStorage.setItem("isAuthenticated", isAuthenticated.toString());
            localStorage.setItem("token", token);
        },
        authFailure: (state, action: PayloadAction<authFailureState>) => {
            state.error = action.payload;
        },
        logout: (state) => {
            localStorage.removeItem("role");
            localStorage.removeItem("isAuthenticated");
            localStorage.removeItem("token");
            state.user = {
                role: "",
                isAuthenticated: false,
                isFormCompleted: false,
                token: "",
            }
        }
    }
})

export const { setCredentials, authFailure, logout } = auth.actions
export default auth.reducer