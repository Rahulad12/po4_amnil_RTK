import { useState } from "react";
import { userLoginData } from "../../types";
import { Eye, EyeOff } from "lucide-react";
import ClipLoader from "react-spinners/ClipLoader";
import { Button, Form, Input, Typography } from "antd";

const { Title } = Typography;

interface FormProps {
    submitHandler: (formData: userLoginData) => void;
    formType: "login" | "register";
    loading?: boolean;
}

const AuthForm = ({ submitHandler, formType, loading }: FormProps) => {

    const [showPassword, setShowPassword] = useState(false);

    const onFinish = (values: userLoginData) => {
        console.log("Form values:", values);
        submitHandler(values);
    };
    const getPasswordRules = (formType: "login" | "register") => {
        return formType === "register"
            ? [
                { required: true, message: "Please enter your password" },
                { min: 6, message: "Password must be at least 6 characters long" },
                { pattern: /[A-Z]/, message: "At least one uppercase letter" },
                { pattern: /[a-z]/, message: "At least one lowercase letter" },
                { pattern: /[0-9]/, message: "At least one number" },
                { pattern: /[!@#$%^&*(),.?":{}|<>]/, message: "At least one special character" },
            ]
            : [{ required: true, message: "Please enter your password" }];
    };

    const formTitle = formType === "register" ? "Register" : "Login";

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
            <div className="w-full max-w-md p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
                <Title level={3} className="text-center mb-6">
                    {formTitle}
                </Title>

                <Form layout="vertical" onFinish={onFinish}>
                    {/* Email Field */}
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: "Please enter your email" },
                            { type: "email", message: "Please enter a valid email" },
                        ]}
                    >
                        <Input placeholder="Enter your email" />
                    </Form.Item>

                    {/* Password Field */}
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={getPasswordRules(formType)}
                    >
                        <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            suffix={
                                showPassword ? (
                                    <EyeOff
                                        className="cursor-pointer text-gray-500"
                                        onClick={() => setShowPassword(false)}
                                    />
                                ) : (
                                    <Eye
                                        className="cursor-pointer text-gray-500"
                                        onClick={() => setShowPassword(true)}
                                    />
                                )
                            }
                        />
                    </Form.Item>

                    {/* Submit Button */}
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            block
                            disabled={loading}
                            className="flex justify-center items-center"
                        >
                            {loading ? (
                                <ClipLoader color="#fff" size={20} />
                            ) : formType === "register" ? (
                                "Register"
                            ) : (
                                "Login"
                            )}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default AuthForm;
