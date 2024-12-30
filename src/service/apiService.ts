import axiosInstance from "./axiosInstance";

class Servico{

    async cadastrarUsuario(usuarioData: { username: string; nome: string; senha: string }){
        const sis = await axiosInstance.post("cadastrar/",usuarioData);
        return sis;
    }

    async login(usuarioData: { username: string; password: string }){
        const sis = await axiosInstance.post("login/",usuarioData);
        return sis;
    }
};


export default new Servico();