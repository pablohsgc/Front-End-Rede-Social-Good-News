import './Post.css';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { SvgIcon, Button } from '@mui/material';
import { ButtonModalComentarios } from '../ButtonModalComentarios/ButtonModalComentarios';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const handleDeletePost = async (idPost) => {
    /*let response = await RequisitaDeletePost(idPost); // implementar função de deletar post
    if (response.erro) {
        alert(response.erro);
    }*/
}

export function Post(props) {
    const foto = props.fotoUsuario;

    return (
        <article className="post">
            <div className="cabecalhoPost">
                <div className="usuarioPost">
                    <img className="fotoPerfilPost" src={foto} alt="Foto de perfil" />
                    <span className="nomeUsuarioPost">{props.nomeUsuario}</span>
                    <span className="dataComentario">{props.data}</span>
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
            <div className="rodapePost">
                <div>
                    <Button><SvgIcon component={ThumbUpOutlinedIcon} fontSize="medium" /></Button>
                    <Button><SvgIcon component={ThumbDownAltOutlinedIcon} fontSize="medium" /></Button>
                    <ButtonModalComentarios quantidade={props.comentarios.length} comentarios={props.comentarios} idPost={props.idPost}></ButtonModalComentarios>
                </div>
                {props.tipoMeuPost && <Button onClick={handleDeletePost}><SvgIcon className="btn-delete" component={DeleteOutlineIcon} fontSize="medium" /></Button>}
            </div>
        </article>
    );
}