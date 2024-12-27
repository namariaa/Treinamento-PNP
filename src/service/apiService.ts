import axiosInstance from "./axiosInstance";

class Servico{
    async pegarURL(){
        const sis = await axiosInstance.get("/api/doc/");
        return sis;
    }
}
export default new Servico();