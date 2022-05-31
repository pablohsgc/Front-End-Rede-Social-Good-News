import './CardPerfil.css';
import { SvgIcon } from '@mui/material';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {useContext} from 'react';
import { AuthContext } from '../../contexts/Auth';

export function CardPerfil(){
    const {logout, user} = useContext(AuthContext); 
    const foto = user.fotoUsuario;

    return (
        <div className='cardPerfil'>
            <div className='divFoto'>
                <img className="fotoPerfil" src={foto} alt="Foto de perfil do usuario"/>
            </div>
            <div className='divInfoUsuario'>
                <span className='nomeUsuario'>{user.nomeUsuario}</span><br/>
                <span className='bioUsuario'>Bio</span><br/>
                <button className='linkSair botaoSair' onClick={logout}>Sair <SvgIcon component={LogoutOutlinedIcon} sx={{ fontSize: 20 }} /></button>
            </div>
        </div>
    );
}