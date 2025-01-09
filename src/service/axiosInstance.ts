import axios  from "axios";
import { getUserLocalStorage } from "../context/Autenticar/utils";

const axiosInstance = axios.create ({
    baseURL: "http://127.0.0.1:8000/"
});

axiosInstance.interceptors.request.use( ///token ser inserido na requisição automaticamente 
    (config) => {
        const user = getUserLocalStorage();
        if (user  && user.token){
            const token = user.token;
            config.headers['Authorization'] =  `Bearer ${token}`;
        }
        else { 
            console.warn('Não tem token porque não foi realizado o cadastro');
        }
        return config;
    },
    async (error) => {
		await Promise.reject(error);
	}
)
export default axiosInstance;