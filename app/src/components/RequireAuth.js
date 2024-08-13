import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { jwtDecode } from "jwt-decode";

const RequireAuth = ({ allowedRoles }) => { 
    const { auth } = useAuth();
    const location = useLocation();
    console.log("inside require auth",auth)
    console.log("#######################3")
    console.log(        auth?.roles?.find(role => allowedRoles?.includes(role)))

    const decoded = auth?.accessToken
        ? jwtDecode(auth?.accessToken)
        : undefined

    const roles = decoded?.UserInfo?.roles || []

    return (
        auth?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.user
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;