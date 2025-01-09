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
    async feed(){
        const sis = await axiosInstance.get("publicacao/");
        return sis;
    }
    async comentario(idMoment:Int32Array, mensagem:string){
        const sis = await axiosInstance.post("comentario/",{publicacao:idMoment, mensagem:mensagem});
        return sis.data;
    }
    async getComentario(){
        const sis = await axiosInstance.get("comentario/");
        return sis;
    }
};    

export default new Servico();