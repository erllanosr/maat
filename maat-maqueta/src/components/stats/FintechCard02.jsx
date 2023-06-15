import React from 'react';
import { Link } from 'react-router-dom';


function FintechCard02() {
  return (
    <div className="flex flex-col col-span-full xl:col-span-4 bg-gradient-to-b from-slate-700 to-slate-800 shadow-lg rounded-sm border border-slate-800">
  
      <div className="h-full flex flex-col px-5 py-6">
        {/* CC container */}
   
        {/* Details */}
        <div className="grow flex flex-col justify-center mt-3">
          <div className="text-xs text-slate-500 font-semibold uppercase mb-3">Details</div>
          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <div className="text-slate-300">Payment Limits</div>
                <div className="text-slate-400 italic">
                  $780,00 <span className="text-slate-500">/</span> $1,500.00
                </div>
              </div>
              <div className="relative w-full h-2 bg-slate-600">
                <div className="absolute inset-0 bg-emerald-500" aria-hidden="true" style={{ width: '50%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <div className="text-slate-300">ATM Limits</div>
                <div className="text-slate-400 italic">
                  $179,00 <span className="text-slate-500">/</span> $1,000.00
                </div>
              </div>
              <div className="relative w-full h-2 bg-slate-600">
                <div className="absolute inset-0 bg-emerald-500" aria-hidden="true" style={{ width: '35%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FintechCard02;
