import { Route, Routes, Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/hook";

const ProtectedRoutes = () => {
    
    const isAuth = useAppSelector(state => state?.auth?.userInfo?.user?.isAuthenticated)

    if(!isAuth) return <Navigate to="/login" replace/>

    return (
        <Routes>
            <Route path="/" element={<h1>Home</h1>} />
        </Routes>
    )
}
export default ProtectedRoutes