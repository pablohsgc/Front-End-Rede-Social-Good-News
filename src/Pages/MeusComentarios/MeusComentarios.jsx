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
                response.reverse();
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
                        <Post idPost={post._id} nomeUsuario={post.username} fotoUsuario={post.fotoUsuario} data={post.date} postagem={post.mensagem} comentarios={post.comentarios} likes={post.likes} dislikes={post.dislikes} key={indice} />
                    )
                )
            }
        </>
    );
}