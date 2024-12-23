import HeaderPNP from "../../components/headerAutentificar";
import card from "../HU001/card.svg";
import "./style.css";
import { useForm} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
	nome: yup.string().required(),
	usuarios: yup.string().required(),
	senha: yup.number().required(),
	confirma: yup.number().required(),
})


function Login(){
	
	const {handleSubmit, register, formState: {errors}} = useForm({
		resolver: yupResolver(schema)
	});
	
	function conferir(){
		console.log("pato")
	}

	return (
		<>
			<HeaderPNP />
			<section style={{ background: "#071D41", padding: "39.5px" }}>
				<div className="conteudo container-lg">
					<img
						className="card"
						src={card}
						alt="card"
					/>
					<form onSubmit={handleSubmit(conferir)}> 
					<div className="cartao" >
						<h2>Fazer Login</h2>

						<div className="br-input small"  style={{paddingTop: "15px"}}>
							<label className="usuarios">Usuário</label>
							<div className="input-group">
								<div className="input-icon">
									<i
										className="fas fa-user"
										aria-hidden="true"
									></i>
								</div>
								<input
									className="small"
									id="usuarios"
									type="text"
									placeholder="Nome do usuário"
									{...register("usuarios")}
								/>
								{
								errors.usuarios?.message !== undefined && (
									<div className="mb-3"><span className="feedback danger" role="alert"><i className="fas fa-times-circle" aria-hidden="true"></i>Coloque seu nome</span>
									</div>
								)
								}
							</div>
						</div>

						<div className="br-input small" style={{paddingTop: "15px"}}>
							<label className="senha">Senha</label>
							<div className="input-group">
								<div className="input-icon">
									<i
										className="fas fa-lock"
										aria-hidden="true"
									></i>
								</div>
								<input
									className="small"
									type="password"
									id="senha"
									placeholder="Senha do usuário"
									{...register("senha")}
								/>
			
								{
								errors.senha?.message !== undefined && (
									<div className="mb-3"><span className="feedback danger" role="alert"><i className="fas fa-times-circle" aria-hidden="true"></i>Coloque sua senha</span>
									</div>
								)
								}
							</div>
						</div>
						<Link to={"/Cadastro"}>Não possui uma conta? Faça seu cadastro</Link>
						<button
							className="br-button block primary mb-3"
							style={{ top: "30px" }}>Entrar
						</button>
					</div>
					</form>
				</div>
			</section>

		</>
	);
}

export default Login;
