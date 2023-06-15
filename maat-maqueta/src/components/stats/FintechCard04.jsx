import React from 'react';
import BarChart from '../../charts/BarChart06';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function FintechCard04() {

  const chartData = {
    labels: [
      '02-01-2021', '03-01-2021', '04-01-2021', '05-01-2021',
    ],
    datasets: [
      // Indigo bars
      {
        label: '2022',
        data: [
          2000, 1000, 1100, 2600,
        ],
        backgroundColor: tailwindConfig().theme.colors.slate[300],
        hoverBackgroundColor: tailwindConfig().theme.colors.slate[600],
        categoryPercentage: 0.66,
      },
      // Gray bars
      {
        label: '2023',
        data: [
          4100, 1900, 2700, 3900,
        ],
        backgroundColor: tailwindConfig().theme.colors.emerald[300],
        hoverBackgroundColor: tailwindConfig().theme.colors.emerald[500],
        categoryPercentage: 0.66,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Comparing the number of assistants of the 4 biggest CSR events of 2022 and 2023</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <BarChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default FintechCard04;
