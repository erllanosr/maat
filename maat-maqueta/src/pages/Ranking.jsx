import React from "react";
import podio1 from "../resources/img/podio1.svg";
import podio2 from "../resources/img/podio2.svg";
import podio3 from "../resources/img/podio3.svg";
import TableRanking from "../components/ranking/TableRanking";
import Nav from "../components/nav/Nav";
import IBMLogo from "../resources/img/logo_empresas/ibm_logo.jpg";
import LenovoLogo from "../resources/img/logo_empresas/lenovo_logo.png";
import InditexLogo from "../resources/img/logo_empresas/inditex_logo.jpg";

function Ranking() {
  return (
    <>
      <Nav></Nav>
      <div className="section-ranking">
        <div className="podio">
          <div className="p segundo">
            <div className="circle">
              <img
                alt="podio 2"
                src={LenovoLogo}
                className="imgRedonda empresa"
              />
            </div>
            <div className="circle">
              <img alt="podio 2" src={podio2} className="imgRedonda ranking" />
            </div>
            <span className="font-medium text-slate-800">Lenovo</span>
          </div>
          <div className="p primero">
            <div className="circle">
              <img alt="podio 1" src={IBMLogo} className="imgRedonda empresa" />
            </div>

            <div className="circle">
              <img alt="podio 1" src={podio1} className="imgRedonda ranking" />
            </div>
            <span className="font-medium text-slate-800">IBM</span>
          </div>
          <div className="p tercero">
            <div className="circle">
              <img
                alt="podio 3"
                src={InditexLogo}
                className="imgRedonda empresa"
              />
            </div>

            <div className="circle">
              <img alt="podio 3" src={podio3} className="imgRedonda ranking" />
            </div>
            <span className="font-medium text-slate-800">Inditex</span>
          </div>
        </div>
        <div className="resto">
          <div className="table-podio">
            <TableRanking />
          </div>
        </div>
      </div>
    </>
  );
}

export default Ranking;
