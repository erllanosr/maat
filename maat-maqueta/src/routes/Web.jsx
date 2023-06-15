import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Iniciosesion from "../pages/Inicio_sesion";
import Donaciones from "../pages/Donaciones";
import Ranking from "../pages/Ranking";
import News from "../pages/News";
import PerfilEmpresa from "../pages/PerfilEmpresa";
import PerfilONG from "../pages/PerfilONG"; 
import PerfilUsuario from "../pages/PerfilUsuario";
import ListadoEmpresas from "../pages/ListadoEmpresas";
import ListadoONG from "../pages/ListadoONG";
import QuienesSomos from "../pages/Quienes_somos";
import Eventos from "../pages/Eventos";
import CrearEvento from "../pages/CrearEvento";
import Contacto from "../pages/Contacto";
import Chat from "../pages/Chat";
import Noticias from "../pages/News";
import Noticia from "../pages/Noticia";
import Registro from "../pages/Registro";
import CrearPublicacion from "../pages/CrearPublicacion";
import RegistroPaso2 from "../components/registroPasos/RegistroPaso2";
import RegistroPaso3 from "../components/registroPasos/RegistroPaso3";
import RegistroPaso4 from "../components/registroPasos/RegistroPaso4";
import SolicitarEvento from "../pages/SolicitarEvento";
import Stats from "../pages/Stats";

function Web() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index="/" element={<Inicio />}></Route>
        <Route path="/login" element={<Iniciosesion />}></Route>
        <Route path="/donaciones" element={<Donaciones />}></Route>
        <Route path="/ranking" element={<Ranking />}></Route>
        <Route path="/noticias" element={<News />}></Route>
        <Route path="/perfil-empresa" element={<PerfilEmpresa />}></Route>
        <Route path="/perfil-ong" element={<PerfilONG />}></Route>
        <Route path="/perfil-usuario" element={<PerfilUsuario />}></Route>
        <Route path="/listado-empresas" element={<ListadoEmpresas />}></Route>
        <Route path="/listado-ong" element={<ListadoONG />}></Route>
        <Route path="/nosotros" element={<QuienesSomos />}></Route>
        <Route path="/ranking" element={<Ranking />}></Route>
        <Route path="/eventos" element={<Eventos />}></Route>
        <Route path="/crear-evento" element={<CrearEvento />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
        <Route path="/eventos" element={<Eventos />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
        <Route path="/noticias" element={<Noticias />}></Route>
        <Route path="/noticia" element={<Noticia />}></Route>
        <Route path="/noticia" element={<Noticia/>}></Route>
        <Route path="/registro" element={<Registro />}></Route>
        <Route path="/registro-02" element={<RegistroPaso2 />}></Route>
        <Route path="/registro-03" element={<RegistroPaso3 />}></Route>
        <Route path="/registro-04" element={<RegistroPaso4 />}></Route>
        <Route path="/solicitar-evento" element={<SolicitarEvento />}></Route>
        <Route path="/crear-publicacion" element={<CrearPublicacion />}></Route>
        <Route path="/stats" element={<Stats />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Web;
