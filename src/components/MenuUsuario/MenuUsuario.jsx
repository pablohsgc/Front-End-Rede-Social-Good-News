import './MenuUsuario.css';
import { CardPerfil } from "../CardPerfil/CardPerfil";
import { BotaoCriarPost } from '../BotaoCriarPost/BotaoCriarPost';
import bookmark from '../../assets/bookmark.png';
import perfil from '../../assets/perfil-de-usuario.png';
import comentario from '../../assets/comentario.png';
import home from '../../assets/home.png';

export function MenuUsuario() {
    return (
        <nav className='menu'>
            <CardPerfil></CardPerfil>
            <ul>
                <li>
                    <a href="/meusPosts">
                        <img className="icone-menu" src={bookmark} alt="imagem de postagens" />
                        Meus Posts
                    </a>
                </li>
                <li>
                    <a href="/editarPerfil">
                        <img className="icone-menu" src={perfil} alt="imagem de perfil" />
                        Editar Perfil
                    </a>
                </li>
                <li>
                    <a href="/meusComentarios">
                        <img className="icone-menu" src={comentario} alt="imagem de comentarios" />
                        Comentários
                    </a>
                </li>
                <li>
                    <a href="/paginaInicial">
                        <img className="icone-menu" src={home} alt="imagem de comentarios" />
                        Pagina Inicial
                    </a>
                </li>
                <BotaoCriarPost></BotaoCriarPost>
            </ul>
        </nav>
    );
}