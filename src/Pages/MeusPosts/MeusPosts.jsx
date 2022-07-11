import "./MeusPosts.css";
import { Post } from "../../components/Post/Post";
import { useState, useEffect } from 'react'
import { RequisitaMeusPosts } from "../../api/Requisicoes";

export function MeusPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        async function listaPosts() {
            const response = await RequisitaMeusPosts();

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
        <section>
            <h1 className="texto-primario">Meus Posts</h1>
            {
                posts.map((post,indice) => 
                    (
                        <Post idPost={post._id} tipoMeuPost={true} nomeUsuario={post.username} fotoUsuario={post.fotoUsuario} data={post.date} postagem={post.mensagem} comentarios={post.comentarios} likes={post.likes} dislikes={post.dislikes} key={indice} />
                    )
                )
            }
        </section>
    );
}