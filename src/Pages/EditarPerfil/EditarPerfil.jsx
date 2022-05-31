import "./EditarPerfil.css";
import {useContext} from 'react';
import { AuthContext } from '../../contexts/Auth';

export function EditarPerfil() {
    const {user} = useContext(AuthContext);
    const foto = user.fotoUsuario;

    return (
        <>
            <button type="button" class="botaoPost" data-bs-toggle="modal" data-bs-target="#editarPerfil">
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
                                <img className="fotoPerfil" src={foto} alt="Foto de perfil do usuario"/>
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
                            <a id="link-mudar-senha" href="/mudarSenha">Mudar Senha</a>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>                            
                            <button type="button" class="btn btn-primary">Salvar</button>                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}