import { Route, Routes, Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/hook";
import HomePage from "../pages/HomePage";

const ProtectedRoutes = () => {

    const isAuth = useAppSelector(state => state?.auth?.user?.isAuthenticated ?? null)

    if (!isAuth) return <Navigate to="/login" replace />

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    )
}
export default ProtectedRoutes