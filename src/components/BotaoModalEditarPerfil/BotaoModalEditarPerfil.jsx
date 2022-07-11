import './BotaoModalEditarPerfil.css';
import { SvgIcon } from "@mui/material";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PhotoCamera from '@mui/icons-material/PhotoCameraOutlined';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/Auth';
import { atualizaPerfil } from './AtualizaPerfil';
import { RequisitaEditaPerfil } from '../../api/Requisicoes';

export function BotaoModalEditarPerfil() {
    const {user} = useContext(AuthContext);
    const [urlFoto,setUrlFoto] = useState(user.fotoUsuario); 
    const [imagem,setImagem] = useState(null);
    const [nome,setNome] = useState(user.nomeUsuario);
    const [bio,setBio] = useState("");

    const alteraImagem = (event) => {
        const file = event.target.files[0];
        
        if(!file){ 
            return;
        }

        let urlLocalImagem = URL.createObjectURL(event.target.files[0]);
        setUrlFoto(urlLocalImagem);
        setImagem(file);
    }

    const atualizaLocalStorage = (nome,url) => {
        let user = JSON.parse(localStorage.getItem("usuario-tp-web"));
        user.nomeUsuario = nome;
        user.fotoUsuario = url;
        localStorage.setItem("usuario-tp-web",JSON.stringify(user));
    }

    const atualiza = async () => {
        if(imagem == null){
            let resposta = await RequisitaEditaPerfil(nome,urlFoto,bio);

            if(resposta.erro){
                alert(resposta.erro);
            }else{
                atualizaLocalStorage(nome,urlFoto);
                alert(resposta.mensagem);
                window.location.reload();
            }
        }

        if(imagem != null)
        atualizaPerfil(imagem,user.username,async function(error,url){
            if(!error){
                let resposta = await RequisitaEditaPerfil(nome,url,bio);
                if(resposta.erro){
                    alert(resposta.erro);
                }else{
                    atualizaLocalStorage(nome,urlFoto);
                    alert(resposta.mensagem);
                    window.location.reload();
                }
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
                                    <input type="text" className="form-control" id="recipient-name" value={nome} onChange={e => setNome(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label for="message-text" className="col-form-label">Bio:</label>
                                    <textarea className="form-control" id="message-text" value={bio} onChange={e => setBio(e.target.value)}></textarea>
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