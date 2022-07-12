import './Post.css';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { SvgIcon, Button } from '@mui/material';
import { ButtonModalComentarios } from '../ButtonModalComentarios/ButtonModalComentarios';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { RequisitaDeletePostagem, RequisitaDeslike, RequisitaLike } from '../../api/Requisicoes';

const user = JSON.parse(localStorage.getItem('usuario-tp-web'));

export function Post(props) {
    const foto = props.fotoUsuario;

    const qtdLikes = props.likes.length;
    const qtdDislikes = props.dislikes.length;
    let porcentagem = ((qtdLikes + qtdDislikes) === 0) ? 0 : qtdLikes / (qtdLikes + qtdDislikes) * 100;
    porcentagem = porcentagem.toFixed(0);

    const data = props.data.substring(0, 10).split('-').reverse().join('/');
    const iconeLike = (props.likes.find(elemento => elemento.username === user.username)) ? ThumbUpIcon : ThumbUpOutlinedIcon;
    const iconeDislike = (props.dislikes.find(elemento => elemento.username === user.username)) ? ThumbDownAltIcon : ThumbDownAltOutlinedIcon;

    const handleLikePost = async () => {
        let resposta = await RequisitaLike(props.idPost);

        if (!resposta.erro) {
            window.location.reload();
        } else {
            alert(resposta.erro);
        }
    }

    const handleDeslikePost = async () => {
        let resposta = await RequisitaDeslike(props.idPost);

        if (!resposta.erro) {
            window.location.reload();
        } else {
            alert(resposta.erro);
        }
    }

    const handleDeletePost = async () => {
        let resposta = await RequisitaDeletePostagem(props.idPost);

        if (!resposta.erro) {
            window.location.reload();
        } else {
            alert(resposta.erro);
        }
    }

    return (
        <article className="post">
            <div className="cabecalhoPost">
                <div className="usuarioPost">
                    <img className="fotoPerfilPost" src={foto} alt="Foto de perfil" />
                    <span className="nomeUsuarioPost">{props.nomeUsuario}</span>
                    <span className="dataComentario">{data}</span>
                </div>
                <div className="relevancia">
                    <div className="relevanciaTopo">
                        <span>Relevancia</span>
                        <span>{porcentagem}%</span>
                    </div>
                    <div className="relevanciaFundo">
                        <progress className="progress-relevancia" value={porcentagem} max="100">{porcentagem}%</progress>
                    </div>
                </div>
            </div>
            <div className="texto">{props.postagem}</div>
            <div className="rodapePost">
                <div>
                    <Button onClick={handleLikePost}><SvgIcon component={iconeLike} fontSize="medium" /></Button>
                    <Button onClick={handleDeslikePost}><SvgIcon component={iconeDislike} fontSize="medium" /></Button>
                    <ButtonModalComentarios quantidade={props.comentarios.length} comentarios={props.comentarios} idPost={props.idPost}></ButtonModalComentarios>
                </div>
                {props.tipoMeuPost && <Button onClick={handleDeletePost}><SvgIcon className="btn-delete" component={DeleteOutlineIcon} fontSize="medium" /></Button>}
            </div>
        </article>
    );
}