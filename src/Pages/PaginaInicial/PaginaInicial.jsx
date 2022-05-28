import { Post } from "../../components/Post/Post";
import "./PaginaInicial.css";

export function PaginaInicial() {
    return (
        <section>
            <h1 className="texto-primario">Página Inicial</h1>
            <Post idPost={"post1"} nomeUsuario={"Teste"} porcentagem={"50"} postagem={"Post teste"} comentarios={[{nomeUsuario:"Usuario 1",data:"24-04-2022",postagem:"O primeiro comentario"},{nomeUsuario:"Usuario 2",data:"24-04-2022",postagem:"O segundo comentario"},{nomeUsuario:"Usuario 3",data:"25-05-2022",postagem:"O terceiro comentario"}]}></Post>
            <Post idPost={"post2"} nomeUsuario={"USR 2"} porcentagem={"40"} postagem={"Post teste 5"} comentarios={[]}></Post>
            <Post idPost={"post3"} nomeUsuario={"USR 3"} porcentagem={"100"} postagem={"Post teste 4"} comentarios={[]}></Post>
            <Post idPost={"post4"} nomeUsuario={"USR 1"} porcentagem={"40"} postagem={"Post teste 10"} comentarios={[]}></Post>
            <Post idPost={"post5"} nomeUsuario={"Teste"} porcentagem={"50"} postagem={"Post teste"} comentarios={[]}></Post>
            <Post idPost={"post6"} nomeUsuario={"USR 2"} porcentagem={"40"} postagem={"Post teste 5"} comentarios={[]}></Post>
            <Post idPost={"post7"} nomeUsuario={"USR 3"} porcentagem={"100"} postagem={"Post teste 4"} comentarios={[]}></Post>
            <Post idPost={"post8"} nomeUsuario={"USR 1"} porcentagem={"40"} postagem={"Post teste 10"} comentarios={[{nomeUsuario:"Usuario 1",data:"24-04-2022",postagem:"O primeiro comentario"},{nomeUsuario:"Usuario 2",data:"24-04-2022",postagem:"O segundo comentario"},{nomeUsuario:"Usuario 3",data:"25-05-2022",postagem:"O terceiro comentario"}]}></Post>
        </section>
    );
}