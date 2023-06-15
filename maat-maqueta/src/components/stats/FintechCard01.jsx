import React from "react";
import LineChart from "../../charts/LineChart05";

// Import utilities
import { tailwindConfig, hexToRGB } from "../../utils/Utils";

function FintechCard01() {
  const chartData = {
    labels: [
      "01-01-2022",
      "02-01-2022",
      "03-01-2022",
      "04-01-2022",
      "05-01-2022",
      "06-01-2022",
      "07-01-2022",
      "08-01-2022",
      "09-01-2022",
      "10-01-2022",
      "11-01-2022",
      "12-01-2022",
      "01-01-2023",
      "02-01-2023",
      "03-01-2023",
      "04-01-2023",
      "05-01-2023",
      "06-01-2023",
      "07-01-2023",
      "08-01-2023",
      "09-01-2023",
      "10-01-2023",
      "11-01-2023",
      "12-01-2023",
      "01-01-2024",
      "02-01-2024",
      "03-01-2024",
      "04-01-2024",
    ],
    datasets: [
      // Indigo line
      {
        label: "Results",
        data: [
          0, 2.5, 2.5, 4, 2.5, 3.8, 5, 9, 7.5, 11, 14, 15, 17, 15, 14, 13, 15,
          26, 22, 23, 24, 27, 31, 27, 32, 36, 39, 36, 39, 27, 35, 32, 29, 35,
          36, 39, 42, 45, 47, 49, 52,60
        ],
        borderColor: tailwindConfig().theme.colors.indigo[500],
        fill: true,
        backgroundColor: `rgba(${hexToRGB(
          tailwindConfig().theme.colors.blue[500]
        )}, 0.08)`,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        clip: 20,
      },
      // Yellow line
      {
        label: "Expected results",
        data: [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          20, 21, 22, 23, 24, 25, 26, 27, 35, 41, 47, 45, 49, 51, 55, 52, 60,
          56, 62, 65, 
        ],
        borderColor: tailwindConfig().theme.colors.amber[400],
        borderDash: [4, 4],
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.amber[400],
        clip: 20,
      },
      // gray line
      {
        label: "Witout Maat Services",
        data: [
          0, 1.25, 1.25, 2, 1.25, 1.9, 2.5, 4.5, 3.75, 5.5, 7, 7.5, 8.5, 7.5, 7, 6.5, 7.5, 13, 11, 11.5, 12, 13.5, 15.5, 13.5, 16, 18, 19.5, 18, 19.5, 13.5, 17.5, 16, 14.5, 17.5, 18, 19.5, 21, 22.5, 23.5, 24.5, 26, 30
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
    <div className="flex flex-col col-span-full xl:col-span-12 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex items-center">
        <h2 className="font-semibold text-slate-800">
          Growth of Attendee Numbers for CSR Events since Engaging Maat Services
        </h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <LineChart data={chartData} width={800} height={300} />
    </div>
  );
}

export default FintechCard01;
