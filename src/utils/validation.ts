export const loginFormValidation = (email: string, password: string) => {
    if (!email || !password) {
        return "Please fill all the fields";
    }
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
        return "Please enter a valid email address";
    }
    return "";
}   