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


function App() {
  /*const Private = ({children}) => {
    const { authenticated,loading } = useContext(AuthContext);

    if(loading){
      return  <div className='loading'>Carregando...</div>;
    }

    if(!authenticated){
      return <Navigate to="/login" />
    }

    return children;
  }*/


  return (
    /*<div className="App row">
      <aside className='col-lg-3 vermelho'>
        <MenuUsuario></MenuUsuario>
      </aside>
      <main className='col-lg-9 azul'>

      </main>
    </div>*/
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Layout menu={<MenuUsuario></MenuUsuario>} areaMain={<Login></Login>} />} exact />
            <Route path="/meusComentarios" element={<Layout menu={<MenuUsuario></MenuUsuario>} areaMain={<MeusComentarios></MeusComentarios>} />} />
            <Route path="/meusPosts" element={<Layout menu={<MenuUsuario></MenuUsuario>} areaMain={<MeusPosts></MeusPosts>} />} />
            <Route path="/editarPerfil" element={<Layout menu={<MenuUsuario></MenuUsuario>} areaMain={<EditarPerfil></EditarPerfil>} />} />
            <Route path="/paginaInicial" element={<Layout menu={<MenuUsuario></MenuUsuario>} areaMain={<PaginaInicial></PaginaInicial>} />} />

          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
