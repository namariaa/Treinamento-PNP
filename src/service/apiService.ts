import { string } from "yup";
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
    async publicacaoNova(postagem: { titulo: string; imagem: string; descricao:string}){
        const usuario = JSON.parse(localStorage.getItem('usuario'));
        const itens = {postagem, autor:usuario, publicado_em:new Date().toISOString()};
        console.log()
        const sis = await axiosInstance.post("NovaPublicacao/",itens);
        return sis;
    }
};


export default new Servico();