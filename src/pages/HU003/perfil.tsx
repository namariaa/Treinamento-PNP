import HeaderPNPCompleto from "../../components/headerCompleto";
import avatar from "../HU001/avatar-pnp.svg";
import "./perfil.css";
import { Link } from "react-router-dom";

function Perfil(){
    
    return(
        <>
        <HeaderPNPCompleto/>
        <img src={avatar} alt="Avatar" />
        <h1>Olá, Fulano</h1>
        <Link id="novo" to={"/NovaPublicacao"} className="br-button primary mr-3" type="button">+ Nova Publicação</Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipisczing elit. Sed eu lectus tempor, vulputate leo eget, molestie leo. Vivamus congue aliquam elit, euddddd  convallis risus semper eu. Donec nisl eros, mattis ac lectus ac, feugiat suscipit urna. Nunc vulputate eros sed turpis tincidunt posuere. Nullam a interdum nisi. Curabitur tempor aliquet ex sed commodo. In quis mauris lobortis, sollicitudin enim vitae, finibus felis.</p>
        </>
    )
}

export default Perfil;