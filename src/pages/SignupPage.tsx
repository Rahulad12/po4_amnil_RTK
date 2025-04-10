import Form from "../component/common/Form.tsx";
import { userLoginData } from "../types/index.ts"
import { useRegisterMutation } from "../services/userApiSlices.ts"
import { authFailure } from "../slices/authSlices.tsx";
import { useAppDispatch } from "../hooks/hook.ts";
import { registerValidation } from "../utils/validation.ts";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [register,{isLoading:loading}] = useRegisterMutation();

    const submitHandler = async (formData: userLoginData) => {
        const validationError = registerValidation(formData.email, formData.password);
        if (validationError) {
            dispatch(authFailure(validationError));
            return;
        }
        try {
            const res = await register(formData).unwrap();
            console.log(res)
            toast.success(res?.message);
            navigate("/login");
        } catch (error: any) {
            console.log(error)
            const resErr: string = error?.data.message || "Register Failed";
            toast.error(resErr);
        }
    }
    return (
        <div>
            <Form submitHandler={submitHandler} formType="register" loading={loading} />
        </div>
    )
}
export default SignupPage;