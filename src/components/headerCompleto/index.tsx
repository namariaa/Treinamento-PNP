import { useState } from "react";
import logo from "../headerAutentificar/logo.svg"
import { Link } from "react-router-dom";

function HeaderPNPCompleto(){
    const [displayDrop, setDisplayDrop] = useState("none");

    function drop(){
      if (displayDrop === "none") setDisplayDrop("flex");
      else setDisplayDrop("none");
    }

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
        <Link to={"/Perfil"}><div>
        <button onMouseOver={drop} onMouseOut={drop}  style={{ height: "auto", padding: "10px"}} className="br-sign-in" type="button" id="avatar-dropdown-trigger" data-toggle="dropdown" data-target="avatar-menu" aria-label="Olá, Fulano"><span className="br-avatar" title="Fulano da Silva"><span className="content bg-orange-vivid-30 text-pure-0">F</span></span><span className="ml-2 text-gray-80 text-weight-regular">Olá, <span className="text-weight-semi-bold">Fulano</span></span><i className="fas fa-caret-down" aria-hidden="true"></i>
        </button>
        <div style={{ display: displayDrop}} className="br-list" id="avatar-menu" role="menu" aria-labelledby="avatar-dropdown-trigger"><a className="br-item" href="javascript:void(0)" role="menuitem">Sair</a>
        </div>
      </div></Link>
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
      <Link id="novo" to={"/NovaPublicacao"} className="br-button primary mr-3" type="button" style={{margin:"24px"}}>+ Nova Publicação</Link>
    </div>
  </div>
</header>
    </>;
}

export default HeaderPNPCompleto;