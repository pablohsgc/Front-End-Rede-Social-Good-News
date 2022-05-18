import './Post.css';

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
            <img src="" alt="Gostei" />
            <img src="" alt="Nao Gostei" />
            <img src="" alt="Comentarios" />
        </article>
    );
}