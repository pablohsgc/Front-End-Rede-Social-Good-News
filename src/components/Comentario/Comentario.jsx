import './Comentario.css';

export default function Comentario(props){
    const foto = props.fotoUsuario;
    const data = props.data.substring(0, 10).split('-').reverse().join('/');

    return (
        <article className="comentario">
            <header className="cabecalho-comentario">
                <div className="usuarioPost">
                    <img className="fotoPerfilPost" src={foto} alt="Foto perfil"/>
                    <span className="nomeUsuarioPost">{props.nomeUsuario}</span>&nbsp;
                    <span className="dataComentario">{data}</span>
                </div>
            </header>
            <div className="texto">
                {props.postagem}
            </div>
        </article>
    );
}