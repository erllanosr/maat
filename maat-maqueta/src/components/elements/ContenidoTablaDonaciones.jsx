import React, { useState } from "react";

function ContenidoTablaDonaciones(props) {
  const [descriptionOpen, setDescriptionOpen] = useState(false);

  const statusColor = (status) => {
    switch (status) {
      case "Approved":
        return "bg-emerald-100 text-emerald-600";
      case "Refunded":
        return "bg-amber-100 text-amber-600";
      default:
        return "bg-slate-100 text-slate-500";
    }
  };

  const typeIcon = (type) => {
    switch (type) {
      case "Subscription":
        return (
          <svg
            className="w-4 h-4 fill-current text-slate-400 shrink-0 mr-2"
            viewBox="0 0 16 16"
          >
            <path d="M4.3 4.5c1.9-1.9 5.1-1.9 7 0 .7.7 1.2 1.7 1.4 2.7l2-.3c-.2-1.5-.9-2.8-1.9-3.8C10.1.4 5.7.4 2.9 3.1L.7.9 0 7.3l6.4-.7-2.1-2.1zM15.6 8.7l-6.4.7 2.1 2.1c-1.9 1.9-5.1 1.9-7 0-.7-.7-1.2-1.7-1.4-2.7l-2 .3c.2 1.5.9 2.8 1.9 3.8 1.4 1.4 3.1 2 4.9 2 1.8 0 3.6-.7 4.9-2l2.2 2.2.8-6.4z" />
          </svg>
        );
      default:
        return (
          <svg
            className="w-4 h-4 fill-current text-slate-400 shrink-0 mr-2"
            viewBox="0 0 16 16"
          >
            <path d="M11.4 0L10 1.4l2 2H8.4c-2.8 0-5 2.2-5 5V12l-2-2L0 11.4l3.7 3.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3l3.7-3.7L7.4 10l-2 2V8.4c0-1.7 1.3-3 3-3H12l-2 2 1.4 1.4 3.7-3.7c.4-.4.4-1 0-1.4L11.4 0z" />
          </svg>
        );
    }
  };

  return (
    <tbody className="text-sm">
      {/* Row */}
      <tr>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="flex items-center text-slate-800">
            <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-slate-100 rounded-full mr-2 sm:mr-3">
              <img className="ml-1" src={props.logo} width="20" height="20" />
            </div>
          </div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="font-medium text-slate-800">{props.nombreONG}</div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="text-left font-medium text-emerald-500">
            {props.WEB}
          </div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <button className="inline-flex items-center justify-center h-8 px-6 mr-6 font-medium tracking-wide text-slate-800 transition duration-200 rounded shadow-md bg-green-300 hover:bg-green-600 focus:shadow-outline focus:outline-none"> {props.btnContacto}</button>
        </td>        
      </tr>
    </tbody>
  );
}

export default ContenidoTablaDonaciones;
