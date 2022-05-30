import Comentario from "../../components/Comentario/Comentario";
import { Post } from "../../components/Post/Post";

export function MeusComentarios(props) {
    return (
        <>
            <h1 className="texto-primario">Meus Comentários</h1>
            
            <section>                
                <Post idPost={"post1"} nomeUsuario={"USR Teste"} porcentagem={"50"} postagem={"Post teste"} comentarios={[{ nomeUsuario: "Usuário de teste", data: "24-04-2022", postagem: "O primeiro comentario" }, { nomeUsuario: "Usuario 2", data: "24-04-2022", postagem: "O segundo comentario" }, { nomeUsuario: "Usuario 3", data: "25-05-2022", postagem: "O terceiro comentario" }]}></Post>
                <Post idPost={"post5"} nomeUsuario={"USR 1"} porcentagem={"40"} postagem={"Post teste 10"} comentarios={[{ nomeUsuario: "Usuário de teste", data: "24-04-2022", postagem: "O primeiro comentario" }, { nomeUsuario: "Usuario 2", data: "24-04-2022", postagem: "O segundo comentario" }]}></Post>
                <Post idPost={"post12"} nomeUsuario={"USR 1"} porcentagem={"80"} postagem={"Postagem 12"} comentarios={[{ nomeUsuario: "Usuário de teste", data: "24-04-2022", postagem: "O primeiro comentario" }]}></Post>
            </section>
        </>
    );
}