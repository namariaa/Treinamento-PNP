import { useEffect, useState } from "react";
import HeaderPNPCompleto from "../../components/headerCompleto";
import Postagem from "../../components/post";
import apiService from "../../service/apiService";

import "./style.css"


function Feed(){
    const [post, setPost] = useState([]);
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

    
    return (
        <>
        <HeaderPNPCompleto/>
        <div className="column">
        {post.map((publicacoes) => 
            <div key={publicacoes.id}>
                <h2>{publicacoes.id}</h2>
            </div>
        )}

        <Postagem/>
        </div>
        </>
    )
}

export default Feed;

/*<div>
          {publicacoes.map((publicacao) => (
            <div key={publicacao.id} className="publicacao">
              <h2>{publicacao.titulo}</h2>
              <p>{publicacao.descricao}</p>
              {publicacao.imagem && (
                <img
                  src={`http://127.0.0.1:8000${publicacao.imagem}`}
                  alt={publicacao.titulo}
                  style={{ width: '100%', height: 'auto' }}
                />
              )}
              <p><em>{new Date(publicacao.data_criacao).toLocaleString()}</em></p>
            </div>
          ))}
        </div>
        {post ? (
				<p key={post.}>{conselhos.slip.advice}</p>
			) : (
				<p>n tem nada</p>
			)}
        
        */