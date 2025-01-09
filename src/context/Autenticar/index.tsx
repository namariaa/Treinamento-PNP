import { createContext, useEffect, useState } from "react";
import { IContext, IProvider, IUser } from "./types";
import Servico from "../../service/apiService";
import { getUserLocalStorage, setUserLocalStorage } from "./utils";
import { useNavigate } from "react-router-dom";

//Criar contexto 
export const AutenticContext = createContext<IContext>({} as IContext);

export const AutenticProvider = ({children} : IProvider) => {
    const [user, setUser] = useState<IUser | null>(null);

    useEffect (() => {
        const user = getUserLocalStorage();
        if (user){
            setUser(user);
        }
    }, []);

    async function autenticar(username:string,password:string){
        const response = await Servico.loginRequest(username, password);
        console.log(response)
        const tokens = {token: response.access, username};
        setUser(tokens);
        setUserLocalStorage(tokens);
    }
    async function deslogar(){
        setUser(null);
        setUserLocalStorage(null);
    }

    return (
        <AutenticContext.Provider value={{autenticar, deslogar, ...user}}>
            {children}
        </AutenticContext.Provider>
    )
}  