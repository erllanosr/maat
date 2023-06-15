import React from 'react';
import BarChart from '../../charts/BarChart05';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function FintechCard03() {

  const chartData = {
    labels: [
      '01-01-2022', '02-01-2022', '03-01-2022',
      '04-01-2022', '05-01-2022', '06-01-2022'
      ,
      '07-01-2022', '08-01-2022', '09-01-2022'
      ,
      '10-01-2022', '11-01-2022', '12-01-2022'
    ],
    datasets: [
      // Indigo bars
      {
        label: '2022',
        data: [800, 1500, 1600, 1700, 2000, 1700,1800, 1500, 1600, 1700, 2000, 1700],
        backgroundColor: tailwindConfig().theme.colors.slate[300],
        hoverBackgroundColor: tailwindConfig().theme.colors.slate[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Grey bars
      {
        label: '2023',
        data: [1600, 1800,2100, 2400, 2800, 3500, 2600, 2800,3100, 3400, 3800, 3500],
        backgroundColor: tailwindConfig().theme.colors.emerald[300],
        hoverBackgroundColor: tailwindConfig().theme.colors.emerald[500],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Event Attendance: A Year of Growth - Comparing 2022 and 2023</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <BarChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default FintechCard03;
