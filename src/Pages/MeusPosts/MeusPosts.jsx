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
                        <Post idPost={post.idPost} tipoMeuPost={true} nomeUsuario={post.nomeUsuario} fotoUsuario={post.fotoUsuario} data={post.data} porcentagem={post.porcentagem} postagem={post.postagem} comentarios={post.comentarios} key={indice} />
                    )
                )
            }
        </section>
    );
}