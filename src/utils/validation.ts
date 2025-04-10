
export const loginFormValidation = (email: string, password: string) => {
    const error = {
        email: "",
        password: "",
    };

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!email) {
        error.email = "Email is required";
    } else if (!emailRegex.test(email)) {
        error.email = "Please enter a valid email address";
    }

    if (!password) {
        error.password = "Password is required";
    }

    // If there's any error, return the full error object
    if (error.email || error.password) {
        return error;
    }

    return "";
};


export const registerValidation = (email: string, password: string) => {
    const error = {
        email: "",
        password: "",
    };

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    const numberRegex = /[0-9]/;
    const lengthRegex = /^.{6,}$/;

    // Email validation
    if (!email) {
        error.email = "Email is required";
    } else if (!emailRegex.test(email)) {
        error.email = "Please enter a valid email address";
    }

    // Password validation
    if (!password) {
        error.password = "Password is required";
    } else if (!uppercaseRegex.test(password)) {
        error.password = "Password must contain at least one uppercase letter";
    } else if (!lowercaseRegex.test(password)) {
        error.password = "Password must contain at least one lowercase letter";
    } else if (!specialCharRegex.test(password)) {
        error.password = "Password must contain at least one special character";
    } else if (!numberRegex.test(password)) {
        error.password = "Password must contain at least one number";
    } else if (!lengthRegex.test(password)) {
        error.password = "Password must be at least 6 characters long";
    }

    // If any error is found
    if (error.email || error.password) {
        return error;
    }

    return "";
};
