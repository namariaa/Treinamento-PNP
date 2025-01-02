import {useState } from "react";
import HeaderPNP from "../../components/headerAutentificar";
import card from "../HU001/card.svg";
import "./style.css";
import { useForm} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { Link, useNavigate } from "react-router-dom";
import apiService from "../../service/apiService";

const schema = yup.object().shape({
	nome: yup.string().required(),
	username: yup.string().required(),
	senha: yup.string().required(),
	confirma: yup.string().required(),
})


function Autocadastro(){
	const [cadastro, setCadastro] =  useState();
	const mudar = useNavigate();
	
	const {handleSubmit, register , getValues, formState: {errors}} = useForm({
		resolver: yupResolver(schema)
	});
	
	const conferir = async (data: { username: string; nome: string; senha: string }) => {
		try {
			const salvar = await apiService.cadastrarUsuario(data);
			setCadastro(salvar.data);
			mudarDisplaySucesso();
			console.log("Cadastro realizado com sucesso!", salvar.data);
			mudar("/login");
		} catch (error) {
		  mudarDisplayErro();
		  console.error("Erro ao cadastrar", error);
		}
	  };
	  
	const [mostrarSenha, setMostrarSenha] = useState("password");
	const [mudarOlho, setMudarOlho] = useState("fas fa-eye");
	const [mostrarSenha2, setMostrarSenha2] = useState("password");
	const [mudarOlho2, setMudarOlho2] = useState("fas fa-eye");
	const [displaySucesso, setDisplaySucesso] = useState("none");
	const [displayErro, setDisplayErro] = useState("none");

	function mudarDisplaySucesso(){ //Para mostrar mensagem de sucesso ou falaha no cadastro
		if (displaySucesso == "none") setDisplaySucesso("flex");
		else setDisplaySucesso("none");
	}

	function mudarDisplayErro(){
		if (displaySucesso == "none") setDisplayErro("flex");
		else setDisplayErro("none");
	}

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
			<div className="br-message success" style={{display:displaySucesso}}>
				<div className="icon"><i className="fas fa-check-circle fa-lg" aria-hidden="true"></i>
				</div>
				<div className="content" aria-label="Sucesso. Seus dados foram alterados conforme preenchimento do formulário." role="alert"><span className="message-title">Sucesso.</span><span className="message-body"> Seus dados foram alterados conforme preenchimento do formulário.</span></div>
				<div className="close">
					<button className="br-button circle small" type="button" aria-label="Fechar a messagem alterta" onClick={mudarDisplaySucesso}><i className="fas fa-times" aria-hidden="true"></i>
					</button>
				</div>
			</div>

			<div className="br-message danger" style={{display:displayErro}}>
				<div className="icon"><i className="fas fa-times-circle fa-lg" aria-hidden="true"></i>
				</div>
				<div className="content" aria-label="Data de início do afastamento inválida. A data não pode ser superior à data atual." role="alert"><span className="message-title">Falha no cadastro.</span><span className="message-body"> Esse usuário já está cadastrado.</span></div>
				<div className="close">
					<button className="br-button circle small" type="button" aria-label="Fechar a messagem alterta" onClick={mudarDisplayErro} ><i className="fas fa-times" aria-hidden="true"></i>
					</button>
				</div>
			</div>

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
							<label className="username">Usuário</label>
							<div className="input-group">
								<div className="input-icon">
									<i
										className="fas fa-user"
										aria-hidden="true"
									></i>
								</div>
								<input
									className="small"
									id="username"
									type="text"
									placeholder="Nome do usuário"
									{...register("username")}
								/>

								{
								errors.username?.message !== undefined && (
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
