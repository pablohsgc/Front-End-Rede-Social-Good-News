import './BotaoCriarPost.css';

export function BotaoCriarPost() {
    return (<>
        <button type="button" class="botaoPost" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Criar Post
        </button>


        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Criar Postagem</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Postagem:</label>
                        <input type="text" class="form-control" id="recipient-name" /><br />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-primary">Postar</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}