import './Post.css';

export function Post(props) {
    return (
        <article className="post">
            <div className="cabecalhoPost">
                <div className="usuarioPost">
                    <img className="fotoPerfilPost" src="" alt="Imagem do perfil" />
                    <span>{props.nomeUsuario}</span>
                </div>
                <div className="relevancia">
                    <span>Relevancia</span>
                    <span>{props.porcentagem}</span>
                </div>
            </div>
            <div className="texto">{props.postagem}</div>
            <img src="" alt="Gostei" />
            <img src="" alt="Nao Gostei" />
            <img src="" alt="Comentarios" />
        </article>
    );
}