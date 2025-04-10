import { Fragment, useState } from "react";
import { userLoginData } from "../../types";
import { useAppSelector } from "../../hooks/hook";
import { Eye, EyeOff } from "lucide-react";
import ClipLoader from "react-spinners/ClipLoader";

interface FormProps {
    submitHandler: (formData: userLoginData) => void;
    formType: "login" | "register";
    loading?: boolean

}

const Form = ({ submitHandler, formType, loading }: FormProps) => {

    const { email: emailError, password: passwordError } = useAppSelector((state) => state.auth.error);
    const [formData, setFormData] = useState<userLoginData>({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        submitHandler(formData);
    };

    return (
        <Fragment>
            <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
                <div className="w-full max-w-md p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
                    <h3 className="text-2xl font-bold text-center mb-6">
                        {formType === "register" ? "Register" : "Login"}
                    </h3>

                    <form onSubmit={onSubmit} className="space-y-4">
                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="text"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-blue-500"
                                placeholder="Enter your email"
                            />
                            {emailError && <p className="text-red-500">{emailError}</p>}
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 pr-10 focus:outline-blue-500"
                                    placeholder="Enter your password"
                                />
                                <div
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="absolute inset-y-3 right-2 cursor-pointer text-gray-600"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </div>
                                {passwordError && <p className="text-red-500">{passwordError}</p>}

                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex justify-center items-center cursor-pointer"
                        >
                            {loading ? (
                                <ClipLoader color="#fff" size={20} />
                            ) : (
                                formType === "register" ? "Register" : "Login"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default Form;
