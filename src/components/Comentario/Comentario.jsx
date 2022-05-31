import './Comentario.css';

export default function Comentario(props){
    const foto = props.fotoUsuario;

    return (
        <article className="comentario">
            <header className="cabecalho-comentario">
                <div className="usuarioPost">
                    <img className="fotoPerfilPost" src={foto} alt="Foto perfil"/>
                    <span className="nomeUsuarioPost">{props.nomeUsuario}</span>&nbsp;
                    <span className="dataComentario">{props.data}</span>
                </div>
            </header>
            <div className="texto">
                {props.postagem}
            </div>
        </article>
    );
}