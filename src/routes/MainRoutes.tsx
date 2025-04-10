import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import Layout from "../component/layout/Layout";

const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/*" element={<PublicRoutes />} />
                    <Route path="/home/*" element={<ProtectedRoutes />} />
                </Route>

            </Routes>
        </BrowserRouter>
    );
};
export default MainRoutes;