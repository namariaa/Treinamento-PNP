import logo from "../headerAutentificar/logo.svg"

function HeaderPNP(){
    return<>
    <header className="br-header compact">
        <div className="container-lg">
            <div className="header-top">
            <div className="header-actions">
                <div className="header-links dropdown">
                <button className="br-button circle small" type="button" data-toggle="dropdown" aria-label="Abrir Acesso Rápido"><i className="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                </div><span className="br-divider vertical mx-half mx-sm-1"></span>
                <div className="header-login">
                <div className="header-sign-in">
                </div>
                </div>
            </div>
            </div>
            <div className="header-bottom">
            <div className="header-menu">
                <div className="header-info">
                <div className="header-title"><img src={logo} alt="logo"/></div>
                </div>
            </div>
            </div>
        </div>
        </header>
    </>;
}

export default HeaderPNP;