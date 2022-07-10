import React,{ createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RequisitaLogin } from "../api/Requisicoes";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
       const recoveredUser = localStorage.getItem('usuario-tp-web');

       if(recoveredUser){
            setUser(JSON.parse(recoveredUser))
       }

       setLoading(false); 
    }, [])

    const login = async (email,senha) => {
        const response = await RequisitaLogin(email,senha);
        //const response = await RequisitaLogin(email,senha);

        //let response = (email === "usuario1@teste.com" && senha === "senha1" )? {auth:true,nome:"Perfil 1",token:"qualquer coisa",fotoUsuario:"https://pablohsg.github.io/Requisicoes/API/imgs/perfil1.jpg"} : {auth:false,erro:"Usuário ou senha errado"};
        
        if(response.auth){
            let loggedUser = {
                nomeUsuario:response.name,
                username:response.username,
                token:response.token,
                fotoUsuario:response.fotoUsuario
            }

            localStorage.setItem('usuario-tp-web',JSON.stringify(loggedUser));

            setUser(loggedUser);
            navigate("/paginaInicial");

            return "Usuario: " + loggedUser.nomeUsuario + ", logado com sucesso na aplicação!";
        }

        return response.erro;
    }

    const logout = () => {
        localStorage.removeItem('usuario-tp-web');

        setUser(null);

        navigate("/login");
    }
    
    return(
        <AuthContext.Provider value={{authenticated: !!user, user, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}