import { IUser } from "./types";

export function setUserLocalStorage(user:IUser | null){
    localStorage.setItem("usuario", JSON.stringify(user));
}
export function getUserLocalStorage(){
    const usuario = localStorage.getItem("usuario");
    if (!usuario){
        return null;
    }
    return JSON.parse(usuario);
}