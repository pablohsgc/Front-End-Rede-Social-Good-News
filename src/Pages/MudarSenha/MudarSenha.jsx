import "./MudarSenha.css";

export function MudarSenha() {
    return (
        <>
            <body class="flex">
                <div class="container cadastro">
                    <div class="user"></div>
                    <form>
                        <h1>Mudar Senha </h1>
                        <div class="input box">
                            <input type="password" required />
                            <label>Senha atual</label>
                        </div>
                        <div class="line"></div>
                        <div class="input box">
                            <input type="password" required />
                            <label>Nova senha</label>
                        </div>
                        <div class="input box">
                            <input type="password" required />
                            <label>Repita nova senha</label>
                        </div>
                        <div class="line"></div>
                        <div>
                            <input type="submit" value="Salvar"  />
                            <a id="botao-voltar-home" href="/paginaInicial">Voltar</a>
                        </div>
                    </form>
                </div>
            </body>
        </>


    );
}