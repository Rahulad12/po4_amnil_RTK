import { Fragment, useState } from "react"
import { userLoginData } from "../types/index.ts"
interface FormProps {
    submitHandler: () => void
}
const Form = ({ submitHandler }: FormProps) => {

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
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                <button type="submit">Login</button>
            </form>
        </Fragment>
    )
}
export default Form;