import React from 'react'
import GreenpeaceLogo from '../../resources/img/logo_ong/greenpeace_logo.png'
import CruzRojaLogo from '../../resources/img/logo_ong/cruzroja_logo.png'
import SaveChildrenLogo from '../../resources/img/logo_ong/savechildren_logo.jpg'

const ListaONG = () => {
  const ongs = [
    {
      id: 1,
      logo: [GreenpeaceLogo],
      nombre: "Greenpeace",
      pagina: "es.greenpeace.org/es/",
    },
    {
      id: 2,
      logo: [CruzRojaLogo],
      nombre: "Cruz Roja",
      pagina: "https://www2.cruzroja.es/sobre-cruz-roja",
    },
    {
      id: 3,
      logo: [SaveChildrenLogo],
      nombre: "Save the Children",
      pagina: "savethechildren.es/",
    }
  ]
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
                  <div className="font-semibold text-left">Organization</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Website</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="sr-only"></div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-slate-200 border-b border-slate-200 items-center">
              {ongs.map((ong) => (
                <tr key={ong.id}>
                  <td className="px-2 first:pl-5 last:pr-5 py-3">
                    <div className="flex items-center">
                      <img className="font-medium text-slate-800 ml-1 w-24 h-auto" src={ong.logo} alt='Logo ONG' />
                    </div>
                  </td>
                  <td className="px-2 first:pl-5 last:pr-5 py-3">
                    <div className="flex items-center">
                      <div className="font-medium text-slate-800">{ong.nombre}</div>
                    </div>
                  </td>
                  <td className="px-2 first:pl-5 last:pr-5 py-3">
                    <div className="flex items-center">
                      <div className="font-medium text-slate-800">{ong.pagina}</div>
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
}

export default ListaONG