import React from 'react'
import LinkedinLogo from "../elements/LinkedinLogo";
import LinkLogo from "../elements/LinkLogo";
import LocationLogo from "../elements/LocationLogo";

const DatosONG = () => {
  return (
    <>
    <header className="text-center sm:text-left mb-6">
        {/* Name */}
        <div className="inline-flex items-start mb-2">
          <h1 className="text-2xl text-slate-800 font-bold">Cáritas</h1>
          <svg className="w-4 h-4 fill-current shrink-0 text-amber-500 ml-2" viewBox="0 0 16 16">
            <path d="M13 6a.75.75 0 0 1-.75-.75 1.5 1.5 0 0 0-1.5-1.5.75.75 0 1 1 0-1.5 1.5 1.5 0 0 0 1.5-1.5.75.75 0 1 1 1.5 0 1.5 1.5 0 0 0 1.5 1.5.75.75 0 1 1 0 1.5 1.5 1.5 0 0 0-1.5 1.5A.75.75 0 0 1 13 6ZM6 16a1 1 0 0 1-1-1 4 4 0 0 0-4-4 1 1 0 0 1 0-2 4 4 0 0 0 4-4 1 1 0 1 1 2 0 4 4 0 0 0 4 4 1 1 0 0 1 0 2 4 4 0 0 0-4 4 1 1 0 0 1-1 1Z" />
          </svg>
        </div>
        {/* Bio */}
        <div className="text-sm mb-3">
        Cáritas es una organización ecologista internacional, económica y políticamente independiente que no acepta donaciones ni presiones de gobiernos, partidos políticos o empresas. Nuestra visión es la de un mundo en el que las personas respeten y vivan en armonía con la naturaleza, ahora y en el futuro.
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
            caritas.com
            </a>
          </div>
          <div className="flex items-center">
            {/* <img src={LinkedinSVG} alt="facebook logo" className='h-4 text-green-300' /> */}
            <LinkedinLogo className="fill-green-700 h-4" />
            <a className="text-sm font-medium whitespace-nowrap text-slate-500 hover:text-[#00332c] ml-2" href="#0">
              linkedin.com/caritas
            </a>
          </div>
        </div>
      </header>
    </>
  )
}

export default DatosONG