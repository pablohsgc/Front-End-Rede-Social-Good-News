import "./Cadastro.css";
import { RequisitaNovoUsuario } from "../../api/Requisicoes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Cadastro() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== passwordConfirm) {
            alert("Senhas não conferem");
            setPasswordConfirm("");
            return;
        }
        else{
            let response = await RequisitaNovoUsuario(username, email, password, name);
            alert(response);
            navigate("/login");
        }
    }    

    return (
        <>
            <body class="flex">
                <div class="container cadastro">
                    <div class="user"></div>
                    <form>
                        <h1 id="cadastro">Cadastro</h1>
                        <div class="input">
                            <input type="text" value={name} onChange={e => setName(e.target.value)} required />
                            <label>Nome Completo</label>
                        </div>
                        <div class="input">
                            <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
                            <label>Username</label>
                        </div>
                        <div class="line"></div>
                        <div class="input">
                            <input type="text" value={email} onChange={e => setEmail(e.target.value)} required />
                            <label>Email</label>
                        </div>
                        <div class="line"></div>
                        <div class="input box">
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                            <label>Senha</label>
                        </div>
                        <div class="input box">
                            <input type="password" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} required />
                            <label>Repita sua senha</label>
                        </div>
                        <input type="submit" value="Cadastrar" onClick={handleSubmit} />
                    </form>
                </div>
            </body>
        </>
    );
}