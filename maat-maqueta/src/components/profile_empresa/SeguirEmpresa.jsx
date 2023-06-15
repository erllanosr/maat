import React from "react";

function SeguirEmpresa() {
  return (
    <>
      <div className="flex space-x-2 sm:mb-2">
        <button className="p-1.5 shrink-0 rounded border border-slate-200 hover:border-slate-300 shadow-sm">
          <svg className="w-4 h-1 fill-current text-slate-400" viewBox="0 0 16 4">
            <circle cx="8" cy="2" r="2" />
            <circle cx="2" cy="2" r="2" />
            <circle cx="14" cy="2" r="2" />
          </svg>
        </button>
        <button className="p-1.5 shrink-0 rounded border border-slate-200 hover:border-slate-300 shadow-sm">
          <svg className="w-4 h-4 fill-current text-[#00332c]" viewBox="0 0 16 16">
            <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7Zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8Z" />
          </svg>
        </button>
        <button className="btn-sm bg-[#00332c] hover:bg-[#faae2b] text-white rounded-md p-1">
          <span className="p-2">Seguir</span>
        </button>
      </div>
    </>
  );
}

export default SeguirEmpresa;
