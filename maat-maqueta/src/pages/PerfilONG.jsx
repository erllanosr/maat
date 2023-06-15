import React from "react";
import Nav from "../components/nav/Nav";
import GreenpeaceLogo from "../resources/img/logo_ong/greenpeace_logo.png";
import SeguirONG from "../components/profile_ong/SeguirONG";
import ContenidoONG from "../components/profile_ong/ContenidoONG";
import DatosONG from "../components/profile_ong/DatosONG";
import BannerCaritas from "../resources/img/logo_empresas/BannerCaritas.webp";
import Caritas_logo from "../resources/img/logo_empresas/Caritas_logo.jpg";

const PerfilONG = () => {
  return (
    <>
      <Nav />
      <div className="grow flex flex-col md:translate-x-0 transition-transform duration-300 ease-in-out translate-x-1/3 bg-[#f2f7f5]">
        {/* Profile background */}
        <div className="relative h-56 bg-slate-200">
          <img className="object-cover h-full w-full" src={BannerCaritas} width="979" height="220" alt="Profile background" />
        </div>

        {/* Content */}
        <div className="relative px-4 sm:px-6 pb-8 mx-40">
          {/* Pre-header */}
          <div className="-mt-16 mb-6 sm:mb-3">
            <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-end">
              {/* Avatar */}
              <div className="inline-flex -ml-1 -mt-1 mb-4 sm:mb-0">
                <img className="rounded-full border-4 border-white h-32" src={Caritas_logo} alt="Avatar" />
              </div>
              {/* Seguir*/}
              <SeguirONG />
            </div>
          </div>

          {/* Datos Empresa */}
          <DatosONG />

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
          <ContenidoONG />
        </div>
      </div>
    </>
  );
};

export default PerfilONG;
