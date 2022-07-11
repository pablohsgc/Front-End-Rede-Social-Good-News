import './BotaoModalEditarPerfil.css';
import { SvgIcon } from "@mui/material";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PhotoCamera from '@mui/icons-material/PhotoCameraOutlined';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/Auth';
import { atualizaPerfil } from './AtualizaPerfil';


export function BotaoModalEditarPerfil() {
    const {user} = useContext(AuthContext);
    const [urlFoto,setUrlFoto] = useState(user.fotoUsuario); 
    const [imagem,setImagem] = useState(null);

    const alteraImagem = (event) => {
        const file = event.target.files[0];
        
        if(!file){ 
            console.log("!file")
            return;
        }

        let urlLocalImagem = URL.createObjectURL(event.target.files[0]);
        setUrlFoto(urlLocalImagem);
        setImagem(file);
    }

    const atualiza = async () => {
        atualizaPerfil("","",imagem,user.username,function(error,url){
            if(!error){
                alert(url);
            }else{
                alert(error);
            }
        });
    }


    return(
        <>
            <button className="botaoModalEditarPerfil" data-bs-toggle="modal" data-bs-target="#editarPerfil">
                <SvgIcon component={PermIdentityOutlinedIcon} sx={{ fontSize: 24 }} />&nbsp;
                Editar Perfil
            </button> 

            <div className="modal fade" id="editarPerfil" tabindex="-1" aria-labelledby="editarPerfilLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title" id="editarPerfilLabel">Editar Perfil</h2>                            
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>                                
                        </div>
                        <div className="modal-body">
                            <div className='divFoto-editarPerfil'>
                                <img className="fotoPerfil" src={urlFoto} alt="Foto de perfil do usuario"/>
                                <label className="label-input-imagem">
                                    <SvgIcon component={PhotoCamera} sx={{ fontSize: 22 }} className="icone-camera" />
                                    <input type="file" className="input-imagem" accept="image/*" onChange={alteraImagem}/>
                                </label>
                            </div>
                            <form>
                                <div className="form-group">
                                    <label for="recipient-name" className="col-form-label">Nome:</label>
                                    <input type="text" className="form-control" id="recipient-name" />
                                </div>
                                <div className="form-group">
                                    <label for="message-text" className="col-form-label">Bio:</label>
                                    <textarea className="form-control" id="message-text"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary" onClick={atualiza}>Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}