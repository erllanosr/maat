import React from 'react';
import LineChart from '../../charts/LineChart06';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function FintechCard07() {

  const chartData = {
    labels: [
     '01-01-2023', '02-01-2023', '03-01-2023', '04-01-2023', '05-01-2023', '06-01-2023', '07-01-2023', '08-01-2023', '09-01-2023', '10-01-2023', '11-01-2023', '12-01-2023'
    ],
    datasets: [
      // Indigo line
      {
        label: 'Mosaic Portfolio',
        data: [
          50, 80, 100, 120, 110, 160, 150, 200, 190, 180,
          250, 220, 230, 250, 260, 240, 230, 260, 210, 240,
        ],
        borderColor: tailwindConfig().theme.colors.emerald[500],
        fill: true,
        backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.emerald[500])}, 0.08)`,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.emerald[500],
        clip: 20,
      },
      // Gray line
      {
        label: 'Expected Return',
        data: [
          100, 105, 115, 120, 125, 130, 135,140, 145, 150,
          155, 160, 165, 170, 175, 180, 185, 190, 195, 200,
        ],
        borderColor: tailwindConfig().theme.colors.slate[300],
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.slate[300],
        clip: 20,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-12 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex items-center">
        <h2 className="font-semibold text-slate-800">Expected vs Actual CSR Events in 2023: Making a Difference in Action</h2>
      </header>
      <div className="px-5 py-3">
        <div className="text-sm italic mb-2">Hey Relentless, the results are surpassing our expectations!</div>
        <div className="flex items-center">
          <div className="text-3xl font-bold text-slate-800 mr-2">251 events</div>
          <div className="text-sm"><span className="font-medium text-amber-500">+97.4%</span></div>
        </div>
        <div className="text-sm text-slate-500">Out of 200</div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        <LineChart data={chartData} width={389} height={262} />
      </div>      
    </div>
  );
}

export default FintechCard07;
