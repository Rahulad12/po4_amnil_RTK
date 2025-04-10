import Form from "../component/Form";
import { userLoginData } from "../types/index.ts"
import { useLoginMutation } from "../services/userApiSlices.ts"
const LoginPage = () => {

    const [isLoading, isError, error] = useLoginMutation();
    const submitHandler = async (formData: userLoginData) => {
        try {
            const res = await useLoginMutation(formData);
        } catch (error) {

        }
    }
    return (
        <div>
            <Form submitHandler={submitHandler} />
        </div>
    )
}
export default LoginPage;