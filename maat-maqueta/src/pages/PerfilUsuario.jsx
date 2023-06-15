import React from "react";
import Nav from "../components/nav/Nav";
import UserPP from "../resources/icons/user_pp.svg";
import ContenidoPerfil from "../components/profile_usuario/ContenidoPerfil";
import DatosPerfil from "../components/profile_usuario/DatosPerfil";
import CocaColaBG from "../resources/img/logo_empresas/coca_cola_background.jpg";
import Avatar from "../resources/images/avatar-03.jpg";

const PerfilUsuario = () => {
  return (
    <>
      <Nav />
      <div className="grow flex flex-col md:translate-x-0 transition-transform duration-300 ease-in-out translate-x-1/3 bg-[#f2f7f5]">
        {/* Profile background */}
        <div className="relative h-56 bg-slate-200">
          <img className="object-cover h-full w-full" src={CocaColaBG} width="979" height="220" alt="Profile background" />
        </div>

        {/* Content */}
        <div className="relative px-4 sm:px-6 pb-8 mx-40">
          {/* Pre-header */}
          <div className="-mt-16 mb-6 sm:mb-3">
            <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-end">
              {/* Avatar */}
              <div className="inline-flex -ml-1 -mt-1 mb-4 sm:mb-0">
                <img className="rounded-full border-4 border-white h-32" src={Avatar} alt="Avatar" />
              </div>
            </div>
          </div>

          {/* Datos Usuario */}
          <DatosPerfil />
          {/* Contenido Usuario */}
          <ContenidoPerfil />
        </div>
      </div>
    </>
  );
};

export default PerfilUsuario;
