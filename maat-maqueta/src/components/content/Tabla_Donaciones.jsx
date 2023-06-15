import React, { useState, useEffect } from "react";
import Contenido_Tabla from "../elements/ContenidoTablaDonaciones";
import logOng1 from '../../resources/icons/ONGManosUnidas.svg'
import logOng2 from '../../resources/icons/acnur.svg'
import logOng3 from '../../resources/icons/SavetheChildren.svg'
import logOng4 from '../../resources/icons/coordinadoraongd.svg'
import logOng5 from '../../resources/icons/facua.svg'
function Tabla_Donaciones() {
  const contenido_tabla = [
    {
      id: "0",
      logo: logOng1,
      nombreONG: "ONG Manos Unidas",
      WEB: "https://www.manosunidas.org/",
      btnContacto: "Donate",
    },
    {
      id: "1",
      logo: logOng2,
      nombreONG: "acnur",
      WEB: "https://www.acnur.org/",
      btnContacto: "Donate",
    },
    {
      id: "2",
      logo: logOng3,
      nombreONG: "Save the Children",
      WEB: "https://www.savethechildren.es/",
      btnContacto: "Donate",
    },
    {
      id: "3",
      logo: logOng4,
      nombreONG: "coordinadoraongd",
      WEB: "https://coordinadoraongd.org/",
      btnContacto: "Donate",
    },
    {
      id: "4",
      logo: logOng5,
      nombreONG: "facua",
      WEB: "https://www.facua.org/",
      btnContacto: "Donate",
    },
  ];

  const [list, setList] = useState([]);

  useEffect(() => {
    setList(contenido_tabla);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-sm border border-slate-200 relative m-16">
      <div>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full divide-y divide-slate-200">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-500 bg-slate-50 border-t border-slate-200">
              <tr>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="sr-only">Logo</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Organizations</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Website</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="sr-only"></div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            {list.map((order) => {
              return (
                <Contenido_Tabla
                  key={order.id}
                  id={order.id}
                  logo={order.logo}
                  nombreONG={order.nombreONG}
                  WEB={order.WEB}
                  btnContacto={order.btnContacto}
                />
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Tabla_Donaciones;
