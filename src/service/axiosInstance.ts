import axios  from "axios";
import { getUserLocalStorage } from "../context/Autenticar/utils";

const axiosInstance = axios.create ({
    baseURL: "http://127.0.0.1:8000/"
});

axiosInstance.interceptors.request.use( ///token ser inserido na requisição automaticamente 
    (config) => {
        const user = getUserLocalStorage();
        const token = user.token;
        if (token){
            config.headers['Authorization'] =  `Bearer ${token}`;
        }
        return config;
    }
)
export default axiosInstance;