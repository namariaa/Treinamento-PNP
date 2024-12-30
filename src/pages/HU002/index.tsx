import HeaderPNP from "../../components/headerAutentificar";
import card from "../HU001/card.svg";
import "./style.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import apiService from "../../service/apiService";
import { useState } from "react";

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

function Login() {
  const [login, setLogin] = useState();
  const Conferir = async (data: { username: string; password: string }) => {
    try {
      const salvar = await apiService.login(data);
      setLogin(salvar.data);
      console.log("Login realizado com sucesso!", salvar.data);
      Redirecionar();
    } catch (error) {
      console.error("Erro ao fazer login", error);
    }
  };

  function Redirecionar() {
    const mudar = useNavigate();
    mudar("/");
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <HeaderPNP />
      <section style={{ background: "#071D41", padding: "39.5px" }}>
        <div className="conteudo container-lg">
          <img className="card" src={card} alt="card" />
          <form onSubmit={handleSubmit(Conferir)}>
            <div className="cartao">
              <h2>Fazer Login</h2>

              <div className="br-input small" style={{ paddingTop: "15px" }}>
                <label className="username">Usuário</label>
                <div className="input-group">
                  <div className="input-icon">
                    <i className="fas fa-user" aria-hidden="true"></i>
                  </div>
                  <input
                    className="small"
                    id="username"
                    type="text"
                    placeholder="Nome do usuário"
                    {...register("username")}
                  />
                  {errors.username?.message !== undefined && (
                    <div className="mb-3">
                      <span className="feedback danger" role="alert">
                        <i
                          className="fas fa-times-circle"
                          aria-hidden="true"
                        ></i>
                        Coloque seu nome
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="br-input small" style={{ paddingTop: "15px" }}>
                <label className="password">Senha</label>
                <div className="input-group">
                  <div className="input-icon">
                    <i className="fas fa-lock" aria-hidden="true"></i>
                  </div>
                  <input
                    className="small"
                    type="password"
                    id="password"
                    placeholder="Senha do usuário"
                    {...register("password")}
                  />

                  {errors.senha?.message !== undefined && (
                    <div className="mb-3">
                      <span className="feedback danger" role="alert">
                        <i
                          className="fas fa-times-circle"
                          aria-hidden="true"
                        ></i>
                        Coloque sua senha
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <Link to={"/Cadastro"}>
                Não possui uma conta? Faça seu cadastro
              </Link>
              <button
                className="br-button block primary mb-3"
                style={{ top: "30px" }}
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
