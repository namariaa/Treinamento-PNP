import { useState } from "react";
import HeaderPNPCompleto from "../../components/headerCompleto";
import post from "./post.png";
import "./style.css"

function Feed(){

    const [tipoDisplay, setTipoDisplay] = useState("none");
    const [tipoComentario, setTipoComentario] = useState("none");

    function mudarDisplay(){
        if (tipoDisplay == "none") setTipoDisplay("flex");
        else setTipoDisplay("none");
    }
    function mudarDisplayComentario(){
        if (tipoComentario == "none") setTipoComentario("inline");
        else setTipoComentario("none");
    }

    return (
        <>
        <HeaderPNPCompleto/>

        <div className="column">
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="br-card">
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-4" style={{justifySelf:"center"}}>
            <div className="br-card">
            <div className="card-header">
                <div className="d-flex"><span className="br-avatar mr-3" title="Fulano da Silva"><span className="content"><i className="fas fa-user" aria-hidden="true"></i></span></span>
                <div className="ml-3">
                    <div className="text-weight-semi-bold text-up-02">Ana Maria</div>
                    <div>@namariaa</div>
                </div>
                </div>
            </div>
            <div className="card-content">
                <p>Natal galera</p>
                <img src={post} alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore perferendis nam porro atque ex at, numquam non optio ab eveniet error vel ad exercitationem, earum et fugiat recusandae harum? Assumenda.</p>
            </div>
            <div className="card-footer">
                <button onClick={mudarDisplay} className="br-button" type="button">Respostas a postagem de @namariaa</button>
                <div className="d-flex">
                <div className="ml-auto">
                <button onClick={mudarDisplayComentario} className="br-button secondary large mr-3" type="button" ><i className="fa-solid fa-comment" ></i> </button>
                </div>
                </div>
            </div>
            </div>
            <div style={{display:tipoComentario}}>
            <div className="col-sm-4 col-lg-12 mb-3">
            <div className="br-input large">
                <input id="input-large" type="text" placeholder="Comentário a ser publicado"/>
            </div>
            </div>
            <button className="br-button primary mr-3" type="button">Comentar</button>
            </div>

            <div id="popup" className="div br-modal medium" aria-modal="true" role="dialog" aria-labelledby="modalalerttitle" style={{display: tipoDisplay}}>
            <button onClick={mudarDisplay} className="br-button close circle" type="button" data-dismiss="br-modal" aria-label="Fechar"><i className="fas fa-times" aria-hidden="true"></i></button>
            <div className="card-header">
                <div className="d-flex"><span className="br-avatar mr-3" title="Fulano da Silva"><span className="content"><i className="fas fa-user" aria-hidden="true"></i></span></span>
                <div className="ml-3">
                    <div className="text-weight-semi-bold text-up-02">Ana Maria</div>
                    <div>@namariaa</div>
                </div>
                </div>
            </div>
        <div className="br-modal-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus commodi laboriosam vel sequi quam deleniti, laborum mollitia blanditiis dolores officiis nulla quos dolorem repellat in nisi alias nesciunt fugit. Similique!</p>
        </div>

        <div className="card-header">
                <div className="d-flex"><span className="br-avatar mr-3" title="Fulano da Silva"><span className="content"><i className="fas fa-user" aria-hidden="true"></i></span></span>
                <div className="ml-3">
                    <div className="text-weight-semi-bold text-up-02">Ana Maria</div>
                    <div>@namariaa</div>
                </div>
                </div>
            </div>
        <div className="br-modal-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus commodi laboriosam vel sequi quam deleniti, laborum mollitia blanditiis dolores officiis nulla quos dolorem repellat in nisi alias nesciunt fugit. Similique!</p>
        </div>

        </div>
        </div>
        


        <div className="col-sm-6 col-md-4 col-lg-4"  style={{justifySelf:"center"}}>
            <div className="br-card">
            <div className="card-header">
                <div className="d-flex"><span className="br-avatar mr-3" title="Fulano da Silva"><span className="content"><i className="fas fa-user" aria-hidden="true"></i></span></span>
                <div className="ml-3">
                    <div className="text-weight-semi-bold text-up-02">Fulano 01</div>
                    <div>@fulaninho</div>
                </div>
                </div>
            </div>
            <div className="card-content">
                <p>Fofoca diária</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore perferendis nam porro atque ex at, numquam non optio ab eveniet error vel ad exercitationem, earum et fugiat recusandae harum? Assumenda.</p>
            </div>
            <div className="card-footer">
                <button className="br-button" type="button">Respostas a postagem de @fulaninho</button>
                <div className="d-flex">
                <div className="ml-auto">
                <button className="br-button secondary large mr-3" type="button" ><i className="fa-solid fa-comment" ></i> </button>
                </div>
                </div>
            </div>
            </div>
        </div>

        <div className="col-sm-6 col-md-4 col-lg-4" style={{justifySelf:"center"}}>
            <div className="br-card">
            <div className="card-header">
                <div className="d-flex"><span className="br-avatar mr-3" title="Fulano da Silva"><span className="content"><i className="fas fa-user" aria-hidden="true"></i></span></span>
                <div className="ml-3">
                    <div className="text-weight-semi-bold text-up-02">Fulano 02</div>
                    <div>@fulanitos</div>
                </div>
                </div>
            </div>
            <div className="card-content">
                <p>Onde será o natal?</p>
                <img src={post} alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore perferendis nam porro atque ex at, numquam non optio ab eveniet error vel ad exercitationem, earum et fugiat recusandae harum? Assumenda.</p>
            </div>
            <div className="card-footer">
                <button className="br-button" type="button">Respostas a postagem de @fulanitos</button>
                <div className="d-flex">
                <div className="ml-auto">
                <button className="br-button secondary large mr-3" type="button" ><i className="fa-solid fa-comment" ></i> </button>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Feed;