import './ButtonModalComentarios.css'
import { SvgIcon, Button } from '@mui/material';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import Comentario from '../Comentario/Comentario';

export function ButtonModalComentarios(props){
    return (
        <>
        <Button className="iconePost" data-bs-toggle="modal" data-bs-target={"#"+props.idPost}>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
          {props.quantidade}
          <span class="visually-hidden">unread messages</span>
        </span>
          <SvgIcon component={ModeCommentOutlinedIcon} fontSize="medium" />
        </Button>

      
        <div class="modal fade" id={props.idPost} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Comentários</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

              <div class="modal-body">
                {
                 props.comentarios.map((comentario,indice) => (
                    <Comentario nomeUsuario={comentario.nomeUsuario} fotoUsuario={comentario.fotoUsuario} data={comentario.data} postagem={comentario.postagem} key={indice}></Comentario>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
        </>
    );
}