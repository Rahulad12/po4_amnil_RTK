import { Fragment, useState } from "react"
import { userLoginData } from "../../types/index.ts"
import { useAppSelector } from "../../hooks/hook.ts";
interface FormProps {
    submitHandler: (formData: userLoginData) => void;
}
const Form = ({ submitHandler }: FormProps) => {

    const { message } = useAppSelector(state => state?.auth?.userInfo);
    console.log(message)
    const validatioError = useAppSelector(state => state?.auth?.error);
    const loading = useAppSelector(state => state?.auth?.loading);

    const [formData, setFormData] = useState<userLoginData>({
        email: '',
        password: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        submitHandler(formData)
    }

    return (
        <Fragment>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                <button type="submit">{
                    loading ? "Loggin...." : "Login"
                }</button>
                {validatioError && <p style={{
                    color: "red"
                }}>{validatioError}</p>}
                {message && <p>{message}</p>}
            </form>
        </Fragment>
    )
}
export default Form;