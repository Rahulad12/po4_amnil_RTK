import { Route, Routes, Navigate } from "react-router-dom";

import LoginPage from '../pages/LoginPage.tsx';
import { useAppSelector } from '../hooks/hook.ts';
import SignupPage from "../pages/SignupPage.tsx";

const PublicRoutes = () => {

    const isAuth = useAppSelector(state => state?.auth?.user?.isAuthenticated ?? null)

    if (isAuth) return <Navigate to="/home" replace />

    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<SignupPage />} />
        </Routes>
    )
}
export default PublicRoutes;