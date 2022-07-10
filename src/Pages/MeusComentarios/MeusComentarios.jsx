import { Post } from "../../components/Post/Post";
import { useState, useEffect } from 'react'
import { RequisitaMeusComentarios } from "../../api/Requisicoes";


export function MeusComentarios(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        async function listaPosts() {
            const response = await RequisitaMeusComentarios();
            if (response.erro) {
                alert(response.erro);
            }else{
                setPosts(response);
            }            
        }

        listaPosts();
    }, []);

    return (
        <>
            <h1 className="texto-primario">Meus Comentários</h1>
            
            {
                posts.map((post,indice) => 
                    (
                        <Post idPost={post.idPost} nomeUsuario={post.nomeUsuario} fotoUsuario={post.fotoUsuario} data={post.data} porcentagem={post.porcentagem} postagem={post.postagem} comentarios={post.comentarios} key={indice} />
                    )
                )
            }
        </>
    );
}