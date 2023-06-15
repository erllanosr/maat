import React from "react";
import cocaImg from "../../resources/img/logo_empresas/coca_cola.png";
import repsolIMG from "../../resources/img/logo_empresas/repsol.png";
import pwcImg from "../../resources/img/logo_empresas/pwc_logo.png";

function TableRanking() {
  const enterprise = [
    {
      id: 1,
      position: 4,
      img: repsolIMG,
      name: "Repsol",
      web: "www.repsol.com",
      events: 230,
    },
    {
      id: 1,
      position: 5,
      img: cocaImg,
      name: "Coca-Cola",
      web: "www.cocacola.es",
      events: 200,
    },
    {
      id: 1,
      position: 6,
      img: pwcImg,
      name: "PWC",
      web: "www.pwc.es",
      events: 125,
    },
  ];

  return (
    <div className="col-span-full bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Top companies</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Rank</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Web</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Num. of Events</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100">
              {/* Row */}
              {enterprise.map((enter) => {
                return (
                  <tr>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                      {"# "+enter.position} 
                        <div className="shrink-0 rounded-full ms-3 mr-2 sm:mr-3">
                          <img src={enter.img} alt={enter.img} className="w-14"></img>
                        </div>
                        <div className="font-medium text-slate-800">
                         {enter.name}
                        </div>
                      </div>
                    </td>

                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div>{enter.web}</div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-center">{enter.events}</div>
                    </td>
                  </tr>
                );
              })}

              {/* Row */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TableRanking;
