import "./MeusPosts.css";
import { Post } from "../../components/Post/Post";

export function MeusPosts() {
    return (
        <>
            <section>
                <h1 className="texto-primario">Meus Posts</h1>
                <Post idPost={"post1"} nomeUsuario={"Usuário de teste"} porcentagem={"50"} postagem={"Post teste"} comentarios={[{ nomeUsuario: "Usuario 1", data: "24-04-2022", postagem: "O primeiro comentario" }, { nomeUsuario: "Usuario 2", data: "24-04-2022", postagem: "O segundo comentario" }, { nomeUsuario: "Usuario 3", data: "25-05-2022", postagem: "O terceiro comentario" }]}></Post>
                <Post idPost={"post2"} nomeUsuario={"Usuário de teste"} porcentagem={"40"} postagem={"Post teste 5"} comentarios={[]}></Post>
                <Post idPost={"post3"} nomeUsuario={"Usuário de teste"} porcentagem={"100"} postagem={"Post teste 4"} comentarios={[]}></Post>
                <Post idPost={"post4"} nomeUsuario={"Usuário de teste"} porcentagem={"40"} postagem={"Post teste 10"} comentarios={[]}></Post>
                <Post idPost={"post5"} nomeUsuario={"Usuário de teste"} porcentagem={"50"} postagem={"Post teste"} comentarios={[]}></Post>
                <Post idPost={"post8"} nomeUsuario={"Usuário de teste"} porcentagem={"40"} postagem={"Post teste 10"} comentarios={[{ nomeUsuario: "Usuario 1", data: "24-04-2022", postagem: "O primeiro comentario" }, { nomeUsuario: "Usuario 2", data: "24-04-2022", postagem: "O segundo comentario" }, { nomeUsuario: "Usuario 3", data: "25-05-2022", postagem: "O terceiro comentario" }]}></Post>
            </section>
        </>
    );
}