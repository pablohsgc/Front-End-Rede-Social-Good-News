import './CardPerfil.css';
import { SvgIcon } from '@mui/material';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {useContext} from 'react';
import { AuthContext } from '../../Contexts/Auth';

export function CardPerfil(){
    const {logout, user} = useContext(AuthContext); 

    return (
        <div className='cardPerfil'>
            <div className='divFoto'>
                <img className="fotoPerfil"/>
            </div>
            <div className='divInfoUsuario'>
                <span className='nomeUsuario'>{user.nomeUsuario}</span><br/>
                <span className='bioUsuario'>Bio</span><br/>
                <button className='linkSair botaoSair' onClick={logout}>Sair <SvgIcon component={LogoutOutlinedIcon} sx={{ fontSize: 20 }} /></button>
            </div>
        </div>
    );
}