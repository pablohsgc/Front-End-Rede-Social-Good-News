import './MenuUsuario.css';
import { CardPerfil } from "../CardPerfil/CardPerfil";
import { BotaoCriarPost } from '../BotaoCriarPost/BotaoCriarPost';

export function MenuUsuario() {
    return (
        <nav className='menu'>
            <CardPerfil></CardPerfil>
            <ul>
                <li>
                    <a href="/meusPosts">
                        <img className="icone-menu" src="https://cdn-icons.flaticon.com/png/512/3031/premium/3031121.png?token=exp=1652482945~hmac=62626fdb7a037e8777cfa6fa044f54e1" alt="imagem de postagens" />
                        Meus Posts
                    </a>
                </li>
                <li>
                    <a href="/editarPerfil">
                        <img className="icone-menu" src="https://cdn-icons.flaticon.com/png/128/3114/premium/3114957.png?token=exp=1652483021~hmac=df538564997955a4e166170bb323b918" alt="imagem de perfil" />
                        Editar Perfil
                    </a>
                </li>
                <li>
                    <a href="/meusComentarios">
                        <img className="icone-menu" src="https://cdn-icons.flaticon.com/png/512/3114/premium/3114810.png?token=exp=1652482257~hmac=d26ecf086209ad94b4265444d9740eb1" alt="imagem de comentarios" />
                        Comentários
                    </a>
                </li>
                <li>
                    <a href="/paginaInicial">
                        <img className="icone-menu" src="https://cdn-icons.flaticon.com/png/512/3114/premium/3114810.png?token=exp=1652482257~hmac=d26ecf086209ad94b4265444d9740eb1" alt="imagem de comentarios" />
                        Pagina Inicial
                    </a>
                </li>
                <BotaoCriarPost></BotaoCriarPost>
            </ul>
        </nav>
    );
}