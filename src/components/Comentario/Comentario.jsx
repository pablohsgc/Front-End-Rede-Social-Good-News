import './Comentario.css';

export default function Comentario(props){
    return (
        <article className="comentario">
            <header className="cabecalho-comentario">
                <div className="usuarioPost">
                    <img className="fotoPerfilPost" />
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