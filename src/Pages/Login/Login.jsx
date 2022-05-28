import "./Login.css";
import {useState,useContext} from 'react';
import { AuthContext } from '../../Contexts/Auth';

export function Login() {
    const {login} = useContext(AuthContext);
  
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = async () => {
        console.log(email + " - " + senha);
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
                        <h1>Log In </h1>
                        <div class="input">
                            <input type="text" value={email} onChange={e => setEmail(e.target.value)} required />
                            <label>Username</label>
                        </div>
                        <div class="input box">
                            <input type="password" value={senha} onChange={e => setSenha(e.target.value)} required />
                            <label>Password</label>
                            <div class="forgot"><a id="forgot-password" href="#">Forgot Password?</a></div>
                        </div>
                        <input type="submit" value="Login" onClick={handleSubmit}/>
                    </form>
                    <div class="div">
                        <div class="line"></div>
                        <div class="signup">Don't Have an account? <a href="#">Sign Up</a></div>
                    </div>
                </div>
            </body>
        </>


    );
}