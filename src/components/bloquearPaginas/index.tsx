import { useAuthorization } from "../../context/Autenticar/useAuthorization"

export const BloquearPaginas = ({children} : {children: JSX.Element}) => {
    const auth = useAuthorization();

    if (!auth.username){
        return(
            <div className="br-message danger">
                <div className="icon"><i className="fas fa-times-circle fa-lg" aria-hidden="true"></i>
            </div>
            <div className="content" aria-label="Data de início do afastamento inválida. A data não pode ser superior à data atual." role="alert"><span className="message-title">Se logue para ter acesso ao conteúdo</span></div>
            <div className="close">
                <button className="br-button circle small" type="button" aria-label="Fechar a messagem alterta"><i className="fas fa-times" aria-hidden="true"></i>
                </button>
            </div>
            </div>
        )
    }
    else{
        return children;
    }
}