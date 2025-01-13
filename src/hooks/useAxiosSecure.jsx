import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
})
const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();
    // request interceptor
    axiosSecure.interceptors.request.use((config)=>{
        const token = localStorage.getItem('access-token');
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    }, (error)=>{

        return Promise.reject(error);
    })

    // response interceptor
    axiosSecure.interceptors.response.use((response)=>{
        return response;
    }, (error)=>{
        const status = error.response.status;
        if( status === 401 || status === 403){
            logOut();
            navigate('/login')
        }
        return Promise.reject(error);
    })
    return axiosSecure;
};

export default useAxiosSecure;