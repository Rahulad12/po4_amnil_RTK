import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { globalResponse } from "../types/index.ts"

const initialState: globalResponse = {
    success: false,
    message: ""
}

const response = createSlice({
    name: "response",
    initialState,
    reducers: {
        setResponse: (state, action: PayloadAction<globalResponse>) => {
            state.success = action.payload.success;
            state.message = action.payload.message
        },
    },
});

export const { setResponse } = response.actions;

export default response.reducer;