import Form from "../component/common/Form.tsx";
import { userLoginData } from "../types/index.ts"
import { useLoginMutation } from "../services/userApiSlices.ts"
import { loginFailure, loginRequest, setCredentials } from "../slices/authSlices.tsx";
import { useAppDispatch } from "../hooks/hook.ts";
import { loginFormValidation } from "../utils/validation.ts";

const LoginPage = () => {

    const dispatch = useAppDispatch();
    const [login] = useLoginMutation();

    const submitHandler = async (formData: userLoginData) => {
        dispatch(loginRequest());
        const validationError = loginFormValidation(formData.email, formData.password);
        if (validationError) {
            dispatch(loginFailure(validationError));
            return;
        }
        try {
            const res = await login(formData).unwrap();
            console.log(res);
            dispatch(setCredentials(res));
        } catch (error: any) {
            const resErr: string = error?.data?.message || "Login failed";
            dispatch(loginFailure(resErr));
        }
    }
    return (
        <div>
            <Form submitHandler={submitHandler} />
        </div>
    )
}
export default LoginPage;