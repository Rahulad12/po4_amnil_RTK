export type userState = {
    role: string
    isAuthenticated: boolean
    isFormCompleted: boolean
    token: string
}

export type authFailureState = {
    email: string,
    password: string
}
export type userLoginData = {
    email: string,
    password: string
}

export type globalResponse = {
    success: boolean,
    message: string
}