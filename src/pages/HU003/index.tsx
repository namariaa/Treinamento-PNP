import HeaderPNPCompleto from "../../components/headerCompleto";
import "./style.css"
import { Link } from "react-router-dom";

function NovaPublicacao(){

    return(
        <>
            <HeaderPNPCompleto/>
            <div className="container">
                <h1>Nova publicação</h1>
                <div className="col-sm-8 col-lg-5">
                    <div className="br-input">
                    <label htmlFor="input-default">Título</label>
                    <input id="input-default" type="text" placeholder="Título da publicação"/>
                </div>
                </div>

            <div className="logo text-sm-left" inverted="inverted"><img src="https://cdngovbr-ds.estaleiro.serpro.gov.br/design-system/images/logo-positive.png" alt="Imagem"/></div>

                <label className="upload-label" htmlFor="multiple-files"><span>Envio de arquivos</span></label>
                <input className="upload-input" id="multiple-files" type="file" aria-hidden="null" aria-label="enviar arquivo"/>
                <div className="upload-list"></div>

            <p className="text-base mt-1">Clique ou arraste os arquivos para cima do componente Upload.</p>

            <div className="br-textarea">
            <label htmlFor="textarea-id8">Descrição</label>
            <textarea id="textarea-id8" aria-controls="limitmax" placeholder="Descrição da publicação" maxLength={300}></textarea>
            <div className="text-base mt-1"><span className="limit" aria-live="polite">Limite máximo de <strong>300</strong> caracteres</span><span className="current" aria-live="polite" role="status" id="limitmax"></span></div>
            </div>
            <div className="botaos"style={{justifySelf:"right", display:"flex"}}>
            <Link to={"/"}><button className="br-button secondary mr-3" type="button">Cancelar</button></Link>
            <Link to={"/"}><button className="br-button primary mr-3" type="button"  >Publicar</button></Link>
            </div>
            </div>
        </>
    )
}

export default NovaPublicacao;