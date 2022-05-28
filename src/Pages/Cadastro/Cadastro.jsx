import "./Cadastro.css";

export function Cadastro() {
    return (
        <>

            <body class="flex">
                <div class="container cadastro">
                    <div class="user"></div>
                    <form>
                        <h1>Cadastro </h1>
                        <div class="input">
                            <input type="text" required />
                            <label>Username</label>
                        </div>
                        <div class="line"></div>
                        <div class="input">
                            <input type="text" required />
                            <label>Email</label>
                        </div>
                        <div class="line"></div>
                        <div class="input box">
                            <input type="password" required />
                            <label>Senha</label>                            
                        </div>
                        <div class="input box">
                            <input type="password" required />
                            <label>Repita sua senha</label>                            
                        </div>
                        <input type="submit" value="Cadastrar" />
                    </form>
                </div>
            </body>
        </>


    );
}