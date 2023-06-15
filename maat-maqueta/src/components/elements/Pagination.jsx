import React from 'react'

function Pagination() {
  return (
    <div>
    <nav className="flex justify-between" role="navigation" aria-label="Navigation">
      <div className="flex-1 mr-2">
        <a className="btn bg-white border-slate-200 text-slate-300 cursor-not-allowed" href="#0" disabled><span className="inline-flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
Anterior</span></a>
      </div>
      <div className="grow text-center">
        <ul className="inline-flex text-sm font-medium -space-x-px">
          <li>
            <span className="inline-flex items-center justify-center rounded-full leading-5 px-2 py-2 bg-white border border-slate-200 text-emerald-500 shadow-sm"><span className="w-5">1</span></span>
          </li>
          <li>
            <a className="inline-flex items-center justify-center leading-5 px-2 py-2 text-slate-600 hover:text-emerald-500 border border-transparent" href="#0"><span className="w-5">2</span></a>
          </li>
          <li>
            <a className="inline-flex items-center justify-center leading-5 px-2 py-2 text-slate-600 hover:text-emerald-500 border border-transparent" href="#0"><span className="w-5">3</span></a>
          </li>
          <li>
            <span className="inline-flex items-center justify-center leading-5 px-2 py-2 text-slate-400">…</span>
          </li>
          <li>
            <a className="inline-flex items-center justify-center rounded-r leading-5 px-2 py-2 text-slate-600 hover:text-emerald-500 border border-transparent" href="#0"><span className="w-5">9</span></a>
          </li>
        </ul>
      </div>
      <div className="flex-1 text-right ml-2">
        <a className="btn bg-white border-slate-200 hover:border-slate-300 text-emerald-500" href="#0"><span className="inline-flex">Siguiente<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</span></a>
      </div>
    </nav>
  </div>
  )
}

export default Pagination