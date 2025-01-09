import { useState } from "react";
import logo from "../headerAutentificar/logo.svg"
import { Link, useNavigate } from "react-router-dom";
import { useAuthorization } from "../../context/Autenticar/useAuthorization";

function HeaderPNPCompleto(){
    const [displayDrop, setDisplayDrop] = useState("none");
   
    const { username, deslogar } = useAuthorization(); 
    
    const mudar = useNavigate();
    const handleLogout = () => {
      deslogar(); 
      mudar("/");
  };


    return<>
    <header className="br-header">
  <div className="container-lg">
    <div className="header-top">
      <div className="header-logo"><Link to={"/"}><img src={logo} alt="logo"/></Link><span className="br-divider vertical"></span>
      </div>
      <div className="header-actions">
        <div className="header-search-trigger">
        </div>
        <div className="header-login">
          <div className="header-sign-in">
       <div>
        <button onMouseOver={() => {setDisplayDrop("flex")}} onMouseOut={() => {setDisplayDrop("none")}}  style={{height: "auto", padding: "10px"}} className="br-sign-in" type="button" id="avatar-dropdown-trigger" data-toggle="dropdown" data-target="avatar-menu" aria-label="Olá, Fulano"><span className="br-avatar" title="Fulano da Silva"><span className="content bg-orange-vivid-30 text-pure-0">{username.substring(0,1)}</span></span><span className="ml-2 text-gray-80 text-weight-regular">Olá, <span className="text-weight-semi-bold">{username}</span></span><i className="fas fa-caret-down" aria-hidden="true"></i>
        </button>
        <div onMouseOver={() => {setDisplayDrop("flex")}} onClick={handleLogout} onMouseOut={() => {setDisplayDrop("none")}} style={{ display: displayDrop}} className="br-list" id="avatar-menu" role="menu" aria-labelledby="avatar-dropdown-trigger"><a className="br-item" href="javascript:void(0)" role="menuitem">Sair</a>
        </div>
      </div>
          </div>
          <div className="header-avatar"></div>
        </div>
      </div>
    </div>
    <div className="header-bottom">
      <div className="header-menu">
        <div className="header-menu-trigger">
        </div>
        <div className="header-info">
          <div className="header-title">PNP Microblog</div>
          <div className="header-subtitle">Plataforma Nilo Peçanha</div>
        </div>
      </div>
      <Link id="novo" to={"/NovaPublicacao"} className="br-button primary mr-3" type="button" style={{justifySelf:"right", left:"10px", marginTop:"15px"}}>+ Nova Publicação</Link>
    </div>
  </div>
</header>
    </>;
}

export default HeaderPNPCompleto;