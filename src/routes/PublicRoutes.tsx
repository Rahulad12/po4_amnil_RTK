import { Route, Routes, Navigate } from "react-router-dom";

import LoginPage from '../pages/LoginPage.tsx';

import { useAppSelector } from '../hooks/hook.ts';

const PublicRoutes = () => {

    const isAuth = useAppSelector(state => state?.auth?.userInfo?.user?.isAuthenticated ?? null)
    console.log(isAuth)

    if (isAuth) return <Navigate to="/home" replace/>

    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    )
}
export default PublicRoutes;