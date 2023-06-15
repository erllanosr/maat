import React from "react";
import JuniorA from "../../resources/img/logo_empresas/juniora_logo.png";
import AyunMadrid from '../../resources/img/logo_empresas/ayun_madrid_logo.png'
import BBVALogo from '../../resources/img/logo_empresas/bbva_logo.jpg'
import PwcLogo from '../../resources/img/logo_empresas/pwc_logo.png'
import NaturgyLogo from '../../resources/img/logo_empresas/naturgy_logo.png'
import SpainCapLogo from '../../resources/img/logo_empresas/spaincap_logo.png'
import SapLogo from '../../resources/img/logo_empresas/sap_logo.png'

const ListaEmpresas = () => {
  const empresas = [
    {
      id: 1,
      logo: [JuniorA],
      nombre: "Junior Achievement",
      pagina: "juniorachievement.org",
      ods_afin: "3. Salud y bienestar",
    },
    {
      id: 2,
      logo: [AyunMadrid],
      nombre: "Ayuntamiento de Madrid",
      pagina: "www.empresa2.com",
      ods_afin: "12. Producción y consumo responsables",
    },
    {
      id: 3,
      logo: [BBVALogo],
      nombre: "BBVA",
      pagina: "www.empresa3.com",
      ods_afin: "13. Acción por el clima",
    },
    {
      id:4,
      logo: [PwcLogo],
      nombre: "PwC",
      pagina: "www.empresa4.com",
      ods_afin: "15. Vida de ecosistemas terrestres",
    },
    {
      id:5,
      logo: [NaturgyLogo],
      nombre: "Naturgy",
      pagina: "naturgy.com",
      ods_afin: "17. Alianzas para lograr los objetivos",
    },
    {
      id:6,
      logo: [SpainCapLogo],
      nombre: "Spain Cap",
      pagina: "spaincap.com",
      ods_afin: "17. Alianzas para lograr los objetivos",
    },
    {
      id:7,
      logo: [SapLogo],
      nombre: "SAP",
      pagina: "sap.com",
      ods_afin: "17. Alianzas para lograr los objetivos",
    }

  ];
  return (
    <>
      <div className="bg-white shadow-lg rounded-sm border border-slate-200 relative m-16">
        <div className="overflow-x-auto">
          <table className="table-auto w-full divide-y divide-slate-200">
            <thead className="text-xs uppercase text-slate-500 bg-slate-50 border-t border-slate-200">
              <tr>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left"></div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Company</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Website</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Related SDG</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="sr-only"></div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-slate-200 border-b border-slate-200">
              {empresas.map((empresa) => (
                <tr key={empresa.id}>
                  <td className="px-2 py-3 first:pl-5 last:pr-5">
                    <div className="flex items-center">
                      <img className="rounded font-medium text-slate-800 ml-1 w-28 h-auto" src={empresa.logo} alt="Logo Empresa"/>
                    </div>
                  </td>
                  <td className="px-2 first:pl-5 last:pr-5 py-3">
                    <div className="flex items-center">
                      <div className="font-medium text-slate-800">{empresa.nombre}</div>
                    </div>
                  </td>
                  <td className="px-2 first:pl-5 last:pr-5 py-3">
                    <div className="flex items-center">
                      <div className="font-medium text-slate-800">{empresa.pagina}</div>
                    </div>
                  </td>
                  <td className="px-2 first:pl-5 last:pr-5 py-3">
                    <div className="flex items-center">
                      <div className="font-medium text-slate-800">{empresa.ods_afin}</div>
                    </div>
                  </td>
                  <td className="px-2 first:pl-5 last:pr-5 py-3">
                    <div className="flex items-center">
                      <div className="font-medium text-slate-800">
                        <button className="inline-flex items-center h-8 p-2 font-medium tracking-wide text-slate-800 transition duration-200 rounded shadow-md bg-green-300 hover:bg-green-600 focus:shadow-outline focus:outline-none">
                        MAATCH
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListaEmpresas;