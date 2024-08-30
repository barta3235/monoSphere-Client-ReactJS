import axios from "axios";
import useAuthHook from "./useAuthHook";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})

const useAxiosSecure = () => {
    const { logOut } = useAuthHook()
    const navigate = useNavigate()
    //interceptor
    // when response comes from the server to client
    // we mainly get two types of response 
    axiosSecure.interceptors.response.use(
        res => {
            console.log('Works Fine')
            return res
        },
        async error => {
            console.log(error.response)
            if (error.response.status === '401' || error.response.status === '403') {
                await logOut()
                navigate('/login')
            }
            return Promise.reject(error)
        }
    )



    // when we send request to the server side
    // axios.interceptors.request 





    return axiosSecure
};

export default useAxiosSecure;