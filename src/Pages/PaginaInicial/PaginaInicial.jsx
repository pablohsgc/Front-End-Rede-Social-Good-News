import { Post } from "../../components/Post/Post";
import "./PaginaInicial.css";
import { useState, useEffect } from 'react'
import { RequisitaPosts } from "../../api/Requisicoes";

export function PaginaInicial() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        async function listaPosts() {
            const response = await RequisitaPosts();
            if (response.erro) {
                alert(response.erro);
            }else{
                response.reverse();
                setPosts(response);
            }            
        }

        listaPosts();
    }, []);


    return(
        <section>
            <h1 className="texto-primario">Página Inicial</h1>
            {
                posts.map((post,indice) => 
                    (
                        <Post idPost={post._id} nomeUsuario={post.username} fotoUsuario={post.fotoUsuario} data={post.date} postagem={post.mensagem} comentarios={post.comentarios} likes={post.likes} dislikes={post.dislikes} key={indice} />
                    )
                )
            }
        </section>
    );
}