import './CardPerfil.css';
import { SvgIcon } from '@mui/material';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export function CardPerfil(){
    return (
        <div className='cardPerfil'>
            <div className='divFoto'>
                <img className="fotoPerfil"/>
            </div>
            <div className='divInfoUsuario'>
                <span className='nomeUsuario'>Nome</span><br/>
                <span className='bioUsuario'>Bio</span><br/>
                <a className='linkSair'>Sair <SvgIcon component={LogoutOutlinedIcon} sx={{ fontSize: 20 }} /></a>
            </div>
        </div>
    );
}