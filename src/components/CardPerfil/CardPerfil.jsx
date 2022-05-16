import './CardPerfil.css';

export function CardPerfil(){
    return (
        <div className='cardPerfil'>
            <div className='divFoto'>
                <img className="fotoPerfil"/>
            </div>
            <div className='divInfoUsuario'>
                <span className='nomeUsuario'>Nome</span><br/>
                <span className='bioUsuario'>Bio</span><br/>
                <a className='linkSair'>Sair</a>
            </div>
        </div>
    );
}