import { useEffect, useState } from "react";
import HeaderPNPCompleto from "../../components/headerCompleto";
import * as yup from "yup";
import apiService from "../../service/apiService";

import "./style.css"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup.object().shape({
     mensagem: yup.string().required()
});


function Feed(){
    const [post, setPost] = useState([]);
    const [comentario,setComentario] = useState<any[]>([]); 
    const [comentarios, setComentarios] = useState([]);
    const [idMomento,setIdMoment] = useState<Int32Array>();
    const [abrirAbaComentario, setAbaComentario] = useState(false);
    const [abrirTodosComentarios, setTodosComentarios] = useState(false);
    useEffect(() => {
        const pegarPost = async () => {
            try{
                const salvar = await apiService.feed();
                setPost(salvar.data.results);
            }catch(error){
                console.error("Erro ao publicar", error);
            }
        };
        pegarPost();
    }, [])

    useEffect(() => {
        const pegarComentario = async () => {
            try{
                const salvar = await apiService.getComentario();
                setComentarios(salvar.data.results);
                console.log(salvar.data.results)
            }catch(error){
                console.error("Erro ao publicar", error);
            }
        };
        pegarComentario();
    },[idMomento])

    const Conferir = async (mensagem: string) => {
        try{
        const salvar = await apiService.comentario(idMomento,mensagem.mensagem);
            setComentario(salvar.data);
            console.log("Comentário feito com sucesso")
        }catch(error){
            console.error("Erro ao fazer comentário", error);
        }
    };

        
    const {handleSubmit,register,formState: { errors },} = useForm({resolver: yupResolver(schema),});
    
    return (
        <>
        <HeaderPNPCompleto />
        <div id="postss" className="column">
        {post.map((publicacoes) => 
            <div key={publicacoes.id} className="col-sm-6 col-md-4 col-lg-4" style={{justifySelf:"center"}}>
              <div className="br-card">
              <div className="card-header">
                  <div className="d-flex"><span className="br-avatar mr-3" title="Fulano da Silva"><span className="content"><i className="fas fa-user" aria-hidden="true"></i></span></span>
                  <div className="ml-3">
                      <div className="text-weight-semi-bold text-up-02">{publicacoes.autor.nome}</div>
                      <div>@{publicacoes.autor.username}</div>
                  </div>
                  </div>
              </div>
              <div className="card-content">
                  <p>{publicacoes.titulo}</p>
                  <img src={publicacoes.imagem} alt="" />
                  <p>{publicacoes.descricao}</p>
              </div>
              <div className="card-footer">
                  <div className="d-flex">
                  <div className="ml-auto">
                  <button onClick={() => {setIdMoment(publicacoes.id);abrirAbaComentario === true? setAbaComentario(false): setAbaComentario(true)}} className="br-button secondary large mr-3" type="button" ><i className="fa-solid fa-comment" ></i> </button>
                  </div>
                  </div>
                  <button onClick={() => {setIdMoment(publicacoes.id);abrirTodosComentarios === true? setTodosComentarios(false): setTodosComentarios(true)}} className="br-button" type="button" >Respostas a postagem de @{publicacoes.autor.username}</button>
              </div>
              </div>
              {abrirAbaComentario && publicacoes.id === idMomento &&(
              <form onSubmit={handleSubmit(Conferir)}>
              <div>
              <div className="col-sm-4 col-lg-12 mb-3">
              <div className="br-input large">
                  <input id="mensagem" type="text" placeholder="Comentário a ser publicado" {...register("mensagem")}/>
                  {errors.mensagem?.message !== undefined && publicacoes.id == idMomento && (
                    <div className="mb-3">
                      <span className="feedback danger" role="alert">
                        <i
                          className="fas fa-times-circle"
                          aria-hidden="true"
                        ></i>
                        Coloque um comentário
                      </span>
                    </div>
                  )}
              </div>
              </div>
              <button className="br-button primary mr-3" type="submit"  style={{margin:"5px", justifySelf:"right", display:"flex"}}>Comentar</button>
              </div>
              </form>
            )}
            {abrirTodosComentarios && publicacoes.id === idMomento && (
                <div id="popup" className="div br-modal medium" aria-modal="true" role="dialog" aria-labelledby="modalalerttitle" style={{marginBottom:"50px"}}>
                {comentarios.map ((comment) =>
                <div key={comment.id}>
                {comment.publicacao === idMomento && (
                <div>
                <button onClick={() => {abrirTodosComentarios === true? setTodosComentarios(false): setTodosComentarios(true)}} className="br-button close circle" type="button" data-dismiss="br-modal" aria-label="Fechar"><i className="fas fa-times" aria-hidden="true"></i></button>
                <div className="card-header">
                    <div className="d-flex"><span className="br-avatar mr-3" title="Fulano da Silva"><span className="content"><i className="fas fa-user" aria-hidden="true"></i></span></span>
                    <div className="ml-3">
                        <div className="text-weight-semi-bold text-up-02">@{comment.autor.nome}</div>
                        <div>@{comment.autor.username}</div>
                    </div>
                    </div>
                </div>
            <div className="br-modal-body">
                <p>{comment.mensagem}</p>
            </div>
            </div>
            )}
            {comment.id === idMomento && comment === null && (
                <p>Sem comentátios</p>
            )}
            </div>
            
                )}
            </div>
        )}
          </div>
        )}

        </div>
        </>
    )
}

export default Feed;
