import React from 'react';



function DirectMessages({
  setMsgSidebarOpen
}) {
  return (
    <div className="mt-4">
      <div className="text-xs font-semibold text-slate-400 uppercase mb-3">DIRECT MESSAGES</div>
      <ul className="mb-6">
        <li className="-mx-2">
          <button className="flex items-center justify-between w-full p-2 rounded bg-green-100" onClick={() => setMsgSidebarOpen(false)}>
            <div className="flex items-center truncate">
              <img className="w-8 h-8 rounded-full mr-2" src="https://www.sonrisasdebombay.org/wp-content/uploads/2017/10/logo-688x890.jpg" width="32" height="32" alt="User 01" />
              <div className="truncate">
                <span className="text-sm font-medium text-slate-800">Sonrisas de bombai</span>
              </div>
            </div>
            <div className="flex items-center ml-2">
              <div className="text-xs inline-flex font-medium bg-green-400 text-white rounded-full text-center leading-5 px-2">2</div>
            </div>
          </button>
        </li>
        <li className="-mx-2">
          <button className="flex items-center justify-between w-full p-2 rounded" onClick={() => setMsgSidebarOpen(false)}>
            <div className="flex items-center truncate">
              <img className="w-8 h-8 rounded-full mr-2" src="https://branding-guidelines.msf.es/esp/imgs/logo/Logo-02.jpg" width="32" height="32" alt="User 02" />
              <div className="truncate">
                <span className="text-sm font-medium text-slate-800">Médicos sin fronteras</span>
              </div>
            </div>
            <div className="flex items-center ml-2">
              <div className="text-xs inline-flex font-medium bg-green-400 text-white rounded-full text-center leading-5 px-2">4</div>
            </div>
          </button>
        </li>
        <li className="-mx-2">
          <button className="flex items-center justify-between w-full p-2 rounded" onClick={() => setMsgSidebarOpen(false)}>
            <div className="flex items-center truncate">
              <img className="w-8 h-8 rounded-full mr-2" src="https://www.caritas.es/main-files/uploads/2018/12/logo_2x_caritas.png" width="32" height="32" alt="User 03" />
              <div className="truncate">
                <span className="text-sm font-medium text-slate-800">Cáritas</span>
              </div>
            </div>
            <div className="flex items-center ml-2">
              <img className="w-5 h-5 rounded-full shrink-0" src="https://www.caritas.es/main-files/uploads/2018/12/logo_2x_caritas.png" width="20" height="20" alt="User 03" />
            </div>
          </button>
        </li>
        <li className="-mx-2">
          <button className="flex items-center justify-between w-full p-2 rounded" onClick={() => setMsgSidebarOpen(false)}>
            <div className="flex items-center truncate">
              <img className="w-8 h-8 rounded-full mr-2" src="data:image/jpeg;base64,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" width="32" height="32" alt="User 04" />
              <div className="truncate">
                <span className="text-sm font-medium text-slate-800">Proyecto Vida</span>
              </div>
            </div>
            <div className="flex items-center ml-2">
              <svg className="w-3 h-3 shrink-0 fill-current text-slate-400" viewBox="0 0 12 12">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
            </div>
          </button>
        </li>
        <li className="-mx-2">
          <button className="flex items-center justify-between w-full p-2 rounded" onClick={() => setMsgSidebarOpen(false)}>
            <div className="flex items-center truncate">
              <img className="w-8 h-8 rounded-full mr-2" src="https://static3.depositphotos.com/1006233/210/i/450/depositphotos_2107725-stock-photo-switzerland-button-with-flag.jpg" width="32" height="32" alt="User 05" />
              <div className="truncate">
                <span className="text-sm font-medium text-slate-800">Cruz Roja</span>
              </div>
            </div>
            <div className="flex items-center ml-2">
              <svg className="w-3 h-3 shrink-0 fill-current text-slate-400" viewBox="0 0 12 12">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
            </div>
          </button>
        </li>
        <li className="-mx-2">
          <button className="flex items-center justify-between w-full p-2 rounded" onClick={() => setMsgSidebarOpen(false)}>
            <div className="flex items-center truncate">
              <img className="w-8 h-8 rounded-full mr-2" src="https://consultoriamit.com/wp-content/uploads/2016/09/Uniceflogo-1.png" width="32" height="32" alt="User 06" />
              <div className="truncate">
                <span className="text-sm font-medium text-slate-800">Unicef</span>
              </div>
            </div>
            <div className="flex items-center ml-2">
              <svg className="w-3 h-3 shrink-0 fill-current text-slate-400" viewBox="0 0 12 12">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
            </div>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default DirectMessages;