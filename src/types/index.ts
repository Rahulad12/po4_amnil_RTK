export type userState = {
    success: boolean,
    user: {
        role: string
        isAuthenticated: boolean
        isFormCompleted: boolean
        token: string
    },
    message: string
}


export type userLoginData = {
    email: string,
    password: string
}