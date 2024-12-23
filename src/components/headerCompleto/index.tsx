import logo from "../headerAutentificar/logo.svg"

function HeaderPNPCompleto(){
    return<>
    <header className="br-header">
  <div className="container-lg">
    <div className="header-top">
      <div className="header-logo"><img src={logo} alt="logo"/><span className="br-divider vertical"></span>
      </div>
      <div className="header-actions">
        <div className="header-search-trigger">
          <button className="br-button circle" type="button" aria-label="Abrir Busca" data-toggle="search" data-target=".header-search"><i className="fas fa-search" aria-hidden="true"></i>
          </button>
        </div>
        <div className="header-login">
          <div className="header-sign-in">
          <button className="br-sign-in" type="button" id="avatar-dropdown-trigger" data-toggle="dropdown" data-target="avatar-menu" aria-label="Olá, Fulano"><span className="br-avatar" title="Fulano da Silva"><span className="content bg-orange-vivid-30 text-pure-0">F</span></span><span className="ml-2 text-gray-80 text-weight-regular">Olá, <span className="text-weight-semi-bold">Ana</span></span><i className="fas fa-caret-down" aria-hidden="true"></i>
        </button>
          </div>
          <div className="header-avatar"></div>
        </div>
      </div>
    </div>
    <div className="header-bottom">
      <div className="header-menu">
        <div className="header-menu-trigger">
          <button className="br-button small circle" type="button" aria-label="Menu" data-toggle="menu" data-target="#main-navigation" id="navigation"><i className="fas fa-bars" aria-hidden="true"></i>
          </button>
        </div>
        <div className="header-info">
          <div className="header-title">Plataforma Nilo Peçanha</div>
        </div>
      </div>
      <div className="header-search">
        <div className="br-input has-icon">
          <label htmlFor="searchbox-7690">Texto da pesquisa</label>
          <input id="searchbox-7690" type="text" placeholder="O que você procura?"/>
          <button className="br-button circle small" type="button" aria-label="Pesquisar"><i className="fas fa-search" aria-hidden="true"></i>
          </button>
        </div>
        <button className="br-button circle search-close ml-1" type="button" aria-label="Fechar Busca" data-dismiss="search"><i className="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
</header>
    </>;
}

export default HeaderPNPCompleto;