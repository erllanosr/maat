import React from 'react';
import PieChart from '../../charts/PieChart';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function FintechCard09() {
  
  const chartData = {
    labels: ['GreenPeace', 'Unicef', 'Acnur', 'Caritas'],
    datasets: [
      {
        label: 'Number of events',
        data: [12, 13, 10, 65],
        backgroundColor: [
          tailwindConfig().theme.colors.emerald[400],
          tailwindConfig().theme.colors.amber[400],
          tailwindConfig().theme.colors.sky[400],
          tailwindConfig().theme.colors.indigo[500],
        ],
        hoverBackgroundColor: [
          tailwindConfig().theme.colors.emerald[500],
          tailwindConfig().theme.colors.amber[500],
          tailwindConfig().theme.colors.sky[500],
          tailwindConfig().theme.colors.indigo[600],
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex items-center">
        <h2 className="font-semibold text-slate-800">Top Collaborative Partners in CSR Events: Empowering Communities in 2023</h2>
      </header>
      <div className="px-5 py-3">
        <div className="text-sm italic mb-2">Hey Reletenless, here is the number of organizations you have collaborated with:</div>
        <div className="text-3xl font-bold text-slate-800">4 partners in 251 events</div>
      </div>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <PieChart data={chartData} width={389} height={220} />
    </div>
  );
}

export default FintechCard09;
