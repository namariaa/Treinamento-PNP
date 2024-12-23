import {useState } from "react";
import HeaderPNP from "../../components/headerAutentificar";
import card from "../HU001/card.svg";
import "./style.css";
import { useForm} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { Link } from "react-router-dom";

const schema = yup.object().shape({
	nome: yup.string().required(),
	usuarios: yup.string().required(),
	senha: yup.number().required(),
	confirma: yup.number().required(),
})


function Autocadastro(){
	
	const {handleSubmit, register , getValues, formState: {errors}} = useForm({
		resolver: yupResolver(schema)
	});
	
	function conferir(){
		console.log("pato")
	}

	const [mostrarSenha, setMostrarSenha] = useState("password");
	const [mudarOlho, setMudarOlho] = useState("fas fa-eye");
	const [mostrarSenha2, setMostrarSenha2] = useState("password");
	const [mudarOlho2, setMudarOlho2] = useState("fas fa-eye");

	function mudarTipo(){
		if (mostrarSenha === "password"){ 
			setMostrarSenha("text");
			setMudarOlho("fas fa-eye");
		}
		else{
			setMostrarSenha("password");
			setMudarOlho("fas fa-eye-slash");
		}
	}

	function mudarTipo2(){
		if (mostrarSenha2 === "password"){ 
			setMostrarSenha2("text");
			setMudarOlho2("fas fa-eye");
		}
		else{
			setMostrarSenha2("password");
			setMudarOlho2("fas fa-eye-slash");
		}
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
						<h2>Autocadastro</h2>
						<div className="br-input small" style={{paddingTop: "15px"}}>
							<label className="nome">Nome</label>
							<div className="input-group">
								<div className="input-icon">
									<i
										className="fas fa-user"
										aria-hidden="true"
									></i>
								</div>
								<input
									className="small"
									id="nome"
									type="text"
									placeholder="Nome do usuário"
									{...register("nome")}
								/> 
								{
								errors.nome?.message !== undefined && (
									<div className="mb-3"><span className="feedback danger" role="alert"><i className="fas fa-times-circle" aria-hidden="true"></i>Coloque seu nome</span>
									</div>
								)
								}
							</div>
						</div>

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
									type={mostrarSenha}
									id="senha"
									placeholder="Senha do usuário"
									{...register("senha")}
								/>
								<button onClick={mudarTipo} className="br-button" type="button" aria-label="Exibir senha" role="switch" aria-checked="false"><i className={mudarOlho} aria-hidden="true"></i>
								</button>
								{
								errors.senha?.message !== undefined && (
									<div className="mb-3"><span className="feedback danger" role="alert"><i className="fas fa-times-circle" aria-hidden="true"></i>Coloque sua senha</span>
									</div>
								)
								}
							</div>
						</div>

						<div className="br-input small" style={{paddingTop: "15px"}} >
							<label className="confirma">
								Confirmação de senha
							</label>
							<div className="input-group">
								<div className="input-icon">
									<i
										className="fas fa-lock"
										aria-hidden="true"
									></i>
								</div>
								<input 
									className="small"
									id="confirma"
									type={mostrarSenha2}
									placeholder="Confirmação da senha do usuário"
									{...register("confirma")}
								/>
								<button onClick={mudarTipo2} className="br-button" type="button" aria-label="Exibir senha" role="switch" aria-checked="false"><i className={mudarOlho2} aria-hidden="true"></i>
								</button>
								{
								getValues().senha !== getValues().confirma &&(
									<div className="mb-3"><span className="feedback danger" role="alert"><i className="fas fa-times-circle" aria-hidden="true"></i>Senhas diferentes</span>
									</div>
								)
								}
							</div>
						</div>
						<Link to="/Login">Já possui uma conta? Faça seu login</Link>
						<button
							className="br-button block primary mb-3"
							style={{ top: "30px" }}>Cadastrar
						</button>
					</div>
					</form>
				</div>
			</section>

		</>
	);
}

export default Autocadastro;
