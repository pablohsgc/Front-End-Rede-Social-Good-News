import './ButtonModalComentarios.css'
import { SvgIcon, Button } from '@mui/material';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import Comentario from '../Comentario/Comentario';
import { useState } from 'react';
import { RequisitaNovoComentario } from '../../api/Requisicoes';

export function ButtonModalComentarios(props){
    const [comentario,setComentario] = useState("");

    const comentar = async () => {
      let resposta = await RequisitaNovoComentario(comentario, props.idPost);
      if(!resposta.erro){
        window.location.reload();
      }
      else{
        alert(resposta.erro);
      }
    }

    return (
        <>
        <Button className="iconePost" data-bs-toggle="modal" data-bs-target={"#P"+props.idPost}>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
          {props.quantidade}
          <span class="visually-hidden">unread messages</span>
        </span>
          <SvgIcon component={ModeCommentOutlinedIcon} fontSize="medium" />
        </Button>

      
        <div class="modal fade" id={"P"+props.idPost} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Comentários</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

              <div class="modal-body">
                {
                 props.comentarios.map((comentario,indice) => (
                    <Comentario nomeUsuario={comentario.username} fotoUsuario={comentario.fotoUsuario} data={comentario.data} postagem={comentario.mensagem} key={indice}></Comentario>
                  ))
                }

                <div className="area-comentario-do-usuario">
                  <h5>Comentar</h5>
                  <div className="area-comentario-usuario">
                    <textarea className="texto-comentario" value={comentario} onChange={e => setComentario(e.target.value)}></textarea>
                    <button className="botao-comentario" onClick={comentar}>Comentar</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        </>
    );
}