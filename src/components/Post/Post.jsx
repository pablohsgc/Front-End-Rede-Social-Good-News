import './Post.css';
/*
import like from '../../assets/like.png';
import deslike from '../../assets/deslike.png';
import comentario from '../../assets/comentario.png';
*/
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { SvgIcon, Button } from '@mui/material';
import { ButtonModalComentarios } from '../ButtonModalComentarios/ButtonModalComentarios';


export function Post(props) {
    return (
        <article className="post">
            <div className="cabecalhoPost">
                <div className="usuarioPost">
                    <img className="fotoPerfilPost" />
                    <span className="nomeUsuarioPost">{props.nomeUsuario}</span>
                </div>
                <div className="relevancia">
                    <div className="relevanciaTopo">
                        <span>Relevancia</span>
                        <span>{props.porcentagem}%</span>
                    </div>
                    <div className="relevanciaFundo">
                        <progress className="progress-relevancia" value={props.porcentagem} max="100">{props.porcentagem}%</progress>
                    </div>
                </div>
            </div>
            <div className="texto">{props.postagem}</div>
            <Button><SvgIcon component={ThumbUpOutlinedIcon} fontSize="medium" /></Button>
            <Button><SvgIcon component={ThumbDownAltOutlinedIcon} fontSize="medium" /></Button>
            <ButtonModalComentarios quantidade={props.comentarios.length} comentarios={props.comentarios} idPost={props.idPost}></ButtonModalComentarios>
        </article>
    );
}
/*
export function Post(props) {
    return (
        <article className="post">
            <div className="cabecalhoPost">
                <div className="usuarioPost">
                    <img className="fotoPerfilPost"/>
                    <span className="nomeUsuarioPost">{props.nomeUsuario}</span>
                </div>
                <div className="relevancia">
                    <div className="relevanciaTopo">
                        <span>Relevancia</span>
                        <span>{props.porcentagem}%</span>
                    </div>
                    <div className="relevanciaFundo">
                        <progress  className="progress-relevancia" value={props.porcentagem} max="100">{props.porcentagem}%</progress>
                    </div>
                </div>
            </div>
            <div className="texto">{props.postagem}</div>
            <img src={like} alt="Gostei" />
            <img src={deslike} alt="Nao Gostei" />
            <img src={comentario} alt="Comentarios" />
        </article>
    );
}*/