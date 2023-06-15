import React from "react";
import Nav from "../components/nav/Nav";
import CocaColaLogo from "../resources/img/logo_empresas/coca_cola.png";
import CocaColaBG from "../resources/img/logo_empresas/coca_cola_background.jpg";
import SeguirEmpresa from "../components/profile_empresa/SeguirEmpresa";
import DatosEmpresa from "../components/profile_empresa/DatosEmpresa";
import ContenidoEmpresa from "../components/profile_empresa/ContenidoEmpresa";

function PerfilEmpresa() {
  return (
    <>
      <Nav></Nav>
      <div className="grow flex flex-col md:translate-x-0 transition-transform duration-300 ease-in-out translate-x-1/3 bg-[#f2f7f5]">
        {/* Profile background */}
        <div className="relative h-56 bg-slate-200">
          <img
            className="object-cover h-full w-full"
            src={CocaColaBG}
            width="979"
            height="220"
            alt="Profile background"
          />
        </div>

        {/* Content */}
        <div className="relative px-4 sm:px-6 pb-8 mx-40">
          {/* Pre-header */}
          <div className="-mt-16 mb-6 sm:mb-3">
            <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-end">
              {/* Avatar */}
              <div className="inline-flex -ml-1 -mt-1 mb-4 sm:mb-0">
                <img className="rounded-full border-4 border-white h-32" src={CocaColaLogo} alt="Avatar" />
              </div>
              {/* Seguir*/}
              <SeguirEmpresa />
            </div>
          </div>

          {/* Datos Empresa */}
          <DatosEmpresa />

          {/* Tabs */}
          <div className="relative mb-6">
            <div className="absolute bottom-0 w-full h-px bg-slate-200" aria-hidden="true"></div>
            <ul className="relative text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar">
              <li className="mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                <a className="block pb-3 text-[#00332c] whitespace-nowrap border-b-2 border-[#00332c]" href="#0">
                  General
                </a>
              </li>
            </ul>
          </div>
          {/* Contenido empresa */}
          <ContenidoEmpresa />
        </div>
      </div>
    </>
  );
}

export default PerfilEmpresa;
