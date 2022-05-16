import React,{ createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import { RequisitaLogin } from "../api/api";//Adicionar o metodo

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
        //const response = await RequisitaLogin(email,senha);
        
        //console.log(response)

        let response = (email === "usuario1@teste.com" && senha === "senha1" )? {auth:true,nome:"Usuário de teste",token:"qualquer coisa"} : null;
        
        if(response.auth){
            let loggedUser = {
                nomeUsuario:response.nome,
                token:response.token
            }

            localStorage.setItem('usuario-tp-web',JSON.stringify(loggedUser))

            setUser(loggedUser);
            navigate("/");

            return "Usuario: " + response.nome + ", logado com sucesso na aplicação!";
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