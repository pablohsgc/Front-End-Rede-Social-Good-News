import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { MenuUsuario } from './components/MenuUsuario/MenuUsuario';
import { AuthContext, AuthProvider } from './contexts/Auth';
import { Layout } from './components/Layout/Layout';
import React, { useContext } from 'react';
import { Login } from './Pages/Login/Login';
import { MeusComentarios } from './Pages/MeusComentarios/MeusComentarios';
import { MeusPosts } from './Pages/MeusPosts/MeusPosts';
import { EditarPerfil } from './Pages/EditarPerfil/EditarPerfil';
import { PaginaInicial } from './Pages/PaginaInicial/PaginaInicial';
import { Cadastro } from './Pages/Cadastro/Cadastro';
import { MudarSenha } from './Pages/MudarSenha/MudarSenha';


function App() {
  const Private = ({children}) => {
    const { authenticated,loading } = useContext(AuthContext);

    if(loading){
      return  <div className='loading'>Carregando...</div>;
    }

    if(!authenticated){
      return <Navigate to="/login" />
    }

    return children;
  }


  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/mudarSenha" element={<Private><MudarSenha/></Private>}/>
            <Route path="/meusComentarios" element={<Private> <Layout menu={<MenuUsuario/>} areaMain={<MeusComentarios/>} /> </Private>} />
            <Route path="/meusPosts" element={<Private> <Layout menu={<MenuUsuario/>} areaMain={<MeusPosts/>} /> </Private>}  />
            <Route path="/editarPerfil" element={<Private> <Layout menu={<MenuUsuario/>} areaMain={<EditarPerfil/>} /> </Private>} />
            <Route path="/paginaInicial" element={<Private> <Layout menu={<MenuUsuario/>} areaMain={<PaginaInicial/>} /> </Private>} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
