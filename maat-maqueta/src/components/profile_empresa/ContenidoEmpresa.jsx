import React from "react";

function ContenidoEmpresa() {
  return (
    <>
      <div className="flex flex-col xl:flex-row xl:space-x-16">
        {/* Main content */}
        <div className="space-y-5 mb-8 xl:mb-0">
          {/* About Me */}
          <div>
            <h2 className="text-slate-800 font-semibold mb-2">About Us</h2>
            <div className="text-sm space-y-2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
              <p>Consectetur adipiscing elit, sed do eiusmod tempor magna aliqua.</p>
            </div>
          </div>

          {/* EVENTOS */}
          <hr />
          <div>
            <h2 className="text-slate-800 font-semibold mb-2">NUESTROS EVENTOS</h2>
            <div className="text-sm space-y-2">
              <p>
                <i>LISTADO DE EVENTOS RECIENTES</i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContenidoEmpresa;
