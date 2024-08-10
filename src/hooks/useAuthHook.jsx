import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useAuthHook = () => {

    const auth = useContext(AuthContext);
    return auth;
    
};

export default useAuthHook;