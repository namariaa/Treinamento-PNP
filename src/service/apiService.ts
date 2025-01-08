import { getUserLocalStorage } from "../context/Autenticar/utils";
import axiosInstance from "./axiosInstance";

class Servico{
    
    async cadastrarUsuario(usuarioData: { username: string; nome: string; senha: string }){
        const sis = await axiosInstance.post("cadastrar/",usuarioData);
        return sis;
    }
    
    async loginRequest(username: string, password: string){
        try{
            const sis = await axiosInstance.post("login/",{username,password});
            return sis.data;
        }catch(error){
            return null;
        }
    }
    async publicacaoNova(formData: FormData){
        const sis = await axiosInstance.post("publicacao/", formData, {
            headers: { "Content-Type": "multipart/form-data" }, 
          });
        return sis.data;
    }
};    


export default new Servico();