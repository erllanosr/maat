import React from "react";
import LinkedinLogo from "../elements/LinkedinLogo";
import LinkLogo from "../elements/LinkLogo";
import LocationLogo from "../elements/LocationLogo";
function DatosEmpresa() {
  return (
    <>
      <header className="text-center sm:text-left mb-6">
        {/* Name */}
        <div className="inline-flex items-start mb-2">
          <h1 className="text-2xl text-slate-800 font-bold">Coca Cola</h1>
          <svg className="w-4 h-4 fill-current shrink-0 text-amber-500 ml-2" viewBox="0 0 16 16">
            <path d="M13 6a.75.75 0 0 1-.75-.75 1.5 1.5 0 0 0-1.5-1.5.75.75 0 1 1 0-1.5 1.5 1.5 0 0 0 1.5-1.5.75.75 0 1 1 1.5 0 1.5 1.5 0 0 0 1.5 1.5.75.75 0 1 1 0 1.5 1.5 1.5 0 0 0-1.5 1.5A.75.75 0 0 1 13 6ZM6 16a1 1 0 0 1-1-1 4 4 0 0 0-4-4 1 1 0 0 1 0-2 4 4 0 0 0 4-4 1 1 0 1 1 2 0 4 4 0 0 0 4 4 1 1 0 0 1 0 2 4 4 0 0 0-4 4 1 1 0 0 1-1 1Z" />
          </svg>
        </div>
        {/* Bio */}
        <div className="text-sm mb-3">
          Servicios de alimentos y bebidas. Coca-Cola es una bebida efervescente vendida en tiendas, restaurantes y
          máquinas expendedoras en más de 200 países. Es producida por The Coca-Cola Company. En un principio, cuando la
          inventó el farmacéutico John Pemberton, fue una medicina patentada, aunque fue adquirida posteriormente por el
          empresario Asa Griggs Candler, cuyas tácticas de marketing hicieron a la bebida una de las más consumidas del
          siglo XX.
        </div>
        {/* Meta */}
        <div className="flex flex-wrap justify-center sm:justify-start space-x-4">
          <div className="flex items-center">
            <LocationLogo className="fill-green-700 h-4" />
            <span className="text-sm font-medium whitespace-nowrap text-slate-500 ml-2">Madrid, ESP</span>
          </div>
          <div className="flex items-center">
            <LinkLogo className="fill-green-700 h-4" />
            <a className="text-sm font-medium whitespace-nowrap text-slate-500 hover:text-[#00332c] ml-2" href="#0">
              cocacola.es/
            </a>
          </div>
          <div className="flex items-center">
            <LinkedinLogo className="fill-green-700 h-4" />
            <a className="text-sm font-medium whitespace-nowrap text-slate-500 hover:text-[#00332c] ml-2" href="#0">
              linkedin.com/cocacola
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default DatosEmpresa;
