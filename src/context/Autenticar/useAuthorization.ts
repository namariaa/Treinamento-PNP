import { useContext } from "react"
import {AutenticContext} from ".";

export const useAuthorization = () => {
    const contexto = useContext(AutenticContext);
    return contexto;
}