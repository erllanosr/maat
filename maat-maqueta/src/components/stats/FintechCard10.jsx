import React from 'react';
import LineChart from '../../charts/LineChart08';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function FintechCard10() {

  const chartData = {
    labels: [
      '12-01-2020', '01-01-2021', '02-01-2021',
      '03-01-2021', '04-01-2021', '05-01-2021',
      '06-01-2021', '07-01-2021', '08-01-2021',
      '09-01-2021', '10-01-2021', '11-01-2021',
      '12-01-2021', '01-01-2022', '02-01-2022',
      '03-01-2022', '04-01-2022', '05-01-2022',
      '06-01-2022', '07-01-2022', '08-01-2022',
      '09-01-2022', '10-01-2022', '11-01-2022',
      '12-01-2022', '01-01-2023',
    ],
    datasets: [
      // Line
      {
        data: [
          732, 610, 610, 610, 504, 504, 504, 504, 504, 504, 391, 349, 349, 349, 342, 323, 322, 273, 270, 263, 252, 232, 192, 191, 191, 154
        ],
        fill: true,
        backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.rose[500])}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.rose[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.rose[500],
        clip: 20,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">
        <header>
          <h3 className="text-sm font-semibold text-slate-500 uppercase mb-1">
            <span className="text-slate-800">Comparison of Event Planning Time: With and Without Maat Services</span> 
          </h3>
          <div className="text-2xl font-bold text-slate-800 mb-1">2 weeks</div>
          <div className="text-sm">
            <span className="font-medium text-red-500">67%</span> - 2023
          </div>
        </header>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        <LineChart data={chartData} width={286} height={98} />
      </div>
    </div>
  );
}

export default FintechCard10;
