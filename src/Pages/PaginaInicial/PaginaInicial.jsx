import { Post } from "../../components/Post/Post";

export function PaginaInicial() {
    return (
        <section>
            <h1>Página Inicial</h1>
            <Post nomeUsuario={"Teste"} porcentagem={"50"} postagem={"Post teste"}></Post>
            <Post nomeUsuario={"USR 2"} porcentagem={"40"} postagem={"Post teste 5"}></Post>
            <Post nomeUsuario={"USR 3"} porcentagem={"100"} postagem={"Post teste 4"}></Post>
            <Post nomeUsuario={"USR 1"} porcentagem={"40"} postagem={"Post teste 10"}></Post>
        </section>
    );
}