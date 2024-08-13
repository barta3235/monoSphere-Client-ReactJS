import { Navigate, useLocation } from "react-router-dom";
import useAuthHook from "../hooks/useAuthHook";

const PrivateRoute = ({children}) => {
    const {user,loading}=useAuthHook();
    const location = useLocation();

    
    if(loading) return <span className="loading loading-ring loading-lg"></span>

    if(user) return children

    return <Navigate to='/login' state={location.pathname} replace={true}></Navigate>
};

export default PrivateRoute;