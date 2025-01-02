import { useState } from "react";
import HeaderPNPCompleto from "../../components/headerCompleto";
import "./style.css"
import { useNavigate } from "react-router-dom";
import apiService from "../../service/apiService";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    titulo: yup.string().required(),
    imagem: yup.string().required(),
    descricao: yup.string().required(),
});

function NovaPublicacao(){
    const [novoPost, setNovoPost] =  useState();
    const mudar = useNavigate();

    const Conferir = async (data: { titulo: string; imagem: string; descricao:string}) => {
            try {
                const salvar = await apiService.publicacaoNova(data);
                setNovoPost(salvar.data);
                console.log("Post foi realizado com sucesso!", salvar.data);
                mudar("/");
            } catch (error) {
              console.error("Erro ao publicar", error);
            }
    };

    const {handleSubmit, register,formState: { errors },} = useForm({
        resolver: yupResolver(schema),
      });

    return(
        <>
            <HeaderPNPCompleto/>
            <div className="container">
                <h1>Nova publicação</h1>
                <form onSubmit={handleSubmit(Conferir)}>
                <div className="br-input small" style={{ paddingTop: "15px" }}>
                <label className="titulo">Título</label>
                <div className="input-group">
        
                  <input
                    className="small"
                    id="titulo"
                    type="text"
                    placeholder="Nome do usuário"
                    {...register("titulo")}
                  />
                  {errors.titulo?.message !== undefined && (
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

            <div className="logo text-sm-left"><img src="https://cdngovbr-ds.estaleiro.serpro.gov.br/design-system/images/logo-positive.png" alt="Imagem"/></div>

                <label className="upload-label" htmlFor="multiple-files"><span>Envio de arquivos</span></label>
                <input className="upload-input" id="imagem" type="file" {...register("imagem")}/>
                {errors.imagem?.message !== undefined && (
                    <div className="mb-3">
                      <span className="feedback danger" role="alert">
                        <i
                          className="fas fa-times-circle"
                          aria-hidden="true"
                        ></i>
                        Forneça uma imagem 
                      </span>
                    </div>
                  )}
                <div className="upload-list"></div>

            <p className="text-base mt-1">Clique ou arraste os arquivos para cima do componente Upload.</p>

            <div className="br-textarea">
            <label htmlFor="textarea-id8">Descrição</label>
            <textarea id="descricao" aria-controls="limitmax" placeholder="Descrição da publicação" maxLength={300} {...register("descricao")} />
            {errors.descricao?.message !== undefined && (
                    <div className="mb-3">
                      <span className="feedback danger" role="alert">
                        <i
                          className="fas fa-times-circle"
                          aria-hidden="true"
                        ></i>
                        Forneça uma descrição para a publicação
                      </span>
                    </div>
                  )}
            <div className="text-base mt-1"><span className="limit" aria-live="polite">Limite máximo de <strong>300</strong> caracteres</span><span className="current" aria-live="polite" role="status" id="limitmax"></span></div>
            </div>
            <div className="botaos"style={{justifySelf:"right", display:"flex"}}>
            <button className="br-button secondary mr-3" type="button">Cancelar</button>
            <button className="br-button primary mr-3" type="submit"  >Publicar</button>
            </div>
            </form>
            </div>
        </>
    )
}

export default NovaPublicacao;