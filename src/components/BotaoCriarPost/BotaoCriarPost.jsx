import { useState } from 'react';
import './BotaoCriarPost.css';

export function BotaoCriarPost() {
    const [postagem,setPostagem] = useState("");

    const postar = () => {
        
    }

    return (<>
        <button type="button" class="botaoPost" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Criar Post
        </button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title" id="exampleModalLabel">Nova Postagem</h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Postagem:</label>
                        <textarea class="form-control" id="message-text" value={postagem} onChange={e => setPostagem(e.target.value)}></textarea>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-primary" onClick={postar}>Postar</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}