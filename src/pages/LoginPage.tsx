import Form from "../component/common/Form.tsx";
import { userLoginData } from "../types/index.ts"
import { useLoginMutation } from "../services/userApiSlices.ts"
import { authFailure, setCredentials } from "../slices/authSlices.tsx";
import { useAppDispatch } from "../hooks/hook.ts";
import { loginFormValidation } from "../utils/validation.ts";
import { toast } from "react-toastify";

const LoginPage = () => {
    const dispatch = useAppDispatch();
    const [login, { isLoading: loading }] = useLoginMutation();

    const submitHandler = async (formData: userLoginData) => {
        const validationError = loginFormValidation(formData.email, formData.password);
        if (validationError) {
            dispatch(authFailure(validationError));
            return;
        }
        try {
            const res = await login(formData).unwrap();
            dispatch(setCredentials(res?.user));
            toast.success(res?.message);

        } catch (error: any) {
            const resErr: string = error?.data?.message || "Login failed";
            toast.error(resErr);
        }
    }

    return (
        <div>
            <Form submitHandler={submitHandler} formType="login" loading={loading} />
        </div>
    )
}
export default LoginPage;