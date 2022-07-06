import './BotaoModalEditarPerfil.css';
import { SvgIcon } from "@mui/material";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PhotoCamera from '@mui/icons-material/PhotoCameraOutlined';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/Auth';


export function BotaoModalEditarPerfil() {
    const {user} = useContext(AuthContext);
    const [urlFoto,setUrlFoto] = useState(user.fotoUsuario); 
    const [imagem,setImagem] = useState(null);

    const alteraImagem = (event) => {
        const file = event.target.files[0];
        
        if(!file) return;
        console.log(process.env)
        let urlLocalImagem = URL.createObjectURL(event.target.files[0]);
        setUrlFoto(urlLocalImagem);
        setImagem(file);
    }
    return(
        <>
            <button className="botaoModalEditarPerfil" data-bs-toggle="modal" data-bs-target="#editarPerfil">
                <SvgIcon component={PermIdentityOutlinedIcon} sx={{ fontSize: 24 }} />&nbsp;
                Editar Perfil
            </button> 

            <div class="modal fade" id="editarPerfil" tabindex="-1" aria-labelledby="editarPerfilLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2 class="modal-title" id="editarPerfilLabel">Editar Perfil</h2>                            
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>                                
                        </div>
                        <div class="modal-body">
                            <div className='divFoto-editarPerfil'>
                                <img className="fotoPerfil" src={urlFoto} alt="Foto de perfil do usuario"/>
                                <label className="label-input-imagem">
                                    <SvgIcon component={PhotoCamera} sx={{ fontSize: 22 }} className="icone-camera" />
                                    <input type="file" className="input-imagem" accept="image/*" onChange={alteraImagem}/>
                                </label>
                            </div>
                            <form>
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label">Nome:</label>
                                    <input type="text" class="form-control" id="recipient-name" />
                                </div>
                                <div class="form-group">
                                    <label for="message-text" class="col-form-label">Bio:</label>
                                    <textarea class="form-control" id="message-text"></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary">Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}