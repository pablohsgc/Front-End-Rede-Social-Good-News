import "./Login.css";
import {useState,useContext} from 'react';
import { AuthContext } from '../../contexts/Auth';
import { useNavigate } from "react-router-dom";

export function Login() {
    const {login,user} = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    if(user){
        navigate("/paginaInicial");
    }

    const handleSubmit = async () => {
        let response = await login(email,senha);
        //console.log("Response handlesubmit: ",response);
        alert(response);
    }

    return (
        <>   
            <body class="flex">
                <div class="container">
                    <div class="user"></div>
                    <form>
                        <h1>Log In</h1>
                        <div class="input">
                            <input type="text" value={email} onChange={e => setEmail(e.target.value)} required />
                            <label>Username</label>
                        </div>
                        <div class="input box">
                            <input type="password" value={senha} onChange={e => setSenha(e.target.value)} required />
                            <label>Password</label>
                            <div class="forgot"><a id="forgot-password" href="#">Esqueceu sua senha?</a></div>
                        </div>
                        <input type="submit" value="Login" onClick={handleSubmit}/>
                    </form>
                    <div class="div">
                        <div class="line"></div>
                        <div class="signup">Não tem uma conta? <a href="/cadastro">Cadastre-se</a></div>
                    </div>
                </div>
            </body>
        </>
    );
}