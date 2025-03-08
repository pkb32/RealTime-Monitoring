import React, { useState } from "react";
import { Chart as ChartJs } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";

const ExtensoMeter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedCrossCut, setSelectedCrossCut] = useState(null);

  const levels = {
    "Level 11": ["L11 North 13 X-cut", "L11 North 11 X-cut", "L11 North 15 X-cut"],
  };

  // Example datasets for different cross-cuts
  const dataSets = {
    "L11 North 13 X-cut": {
      labels: ['17-05-2022', '18-05-2022', '19-05-2022', '20-05-2022', '22-05-2022', '23-05-2022', '26-05-2022', '30-05-2022', 
                '05-06-2022', '12-06-2022', '19-06-2022', '26-05-2022', '03-07-2022', '10-07-2022', '17-07-2022', '24-07-2022', 
                '31-07-2022', '07-08-2022', '14-08-2022', '21-08-2022', '28-08-2022', '04-09-2022', '11-09-2022', '18-09-2022', 
                '25-09-2022', '02-10-2022', '09-10-2022', '16-10-2022', '23-10-2022', '30-10-2022', '04-11-2022', '11-11-2022', 
                '18-11-2022', '25-11-2022', '02-12-2022', '09-12-2022', '16-12-2022', '23-12-2022', '30-12-2022', '06-01-2023', 
                '13-01-2023', '20-01-2023', '27-01-2023', '03-02-2023', '10-02-2023', '17-02-2023', '24-02-2023', '03-03-2023', 
                '10-03-2023', '17-03-2023', '24-03-2023', '31-03-2023', '07-04-2023', '14-04-2023', '20-04-2023', '28-04-2023'
                ],
      datasets: [
        {
          label: "Anchor Depth: 12 mtr",
          data: [0.00, -0.08, 0.95, 0.98, 0.70, 0.81, 0.70, 0.70, 0.98, 0.25, 0.67, 1.09, 1.26, 1.09, 1.01, 0.78, 
            1.29, 1.20, 1.23, 1.29, 1.34, 1.37, 1.34, 1.43, 1.46, 1.43, 1.57, 1.65, 1.60, 1.62, 1.43, 1.48, 1.51, 
            1.46, 1.54, 10.39, 4.51, 3.95, 3.19, 3.30, 3.25, 3.39, 3.50, 4.37, 4.98, 5.99, 7.78, 8.48, 10.58, 11.59, 
            12.52, 14.39, 15.09, 15.90, 16.60, 16.91
          ],
          borderColor: "blue",
          fill: false,
        },
        {
          label: "Anchor Depth: 9 mtr",
          data: [0.00, -0.06, 0.84, 0.03, 0.06, 0.09, 0.87, 0.90, 1.25, 1.28, 1.28, 1.02, 1.16, 1.13, 1.22, 1.16, 1.19, 
            1.16, 1.10, 1.07, 1.13, 1.19, 1.25, 1.57, 1.54, 1.45, 1.62, 1.65, 1.60, 1.62, 1.60, 1.62, 1.62, 1.60, 1.65,
            6.41, 3.16, 3.92, 4.58, 4.67, 4.76, 4.84, 4.93, 4.99, 5.02, 5.22, 5.34, 6.67, 8.24, 9.05, 9.98, 11.25, 
            11.89, 12.33, 12.88, 13.31
          ],
          borderColor: "red",
          fill: false,
        },
        {
          label: "Anchor Depth: 6 mtr",
          data: [0.00, -1.15, -0.87, -0.48, 0.31, 0.34, -0.87, -0.73, -0.64, -0.50, -0.34, -0.36, -0.70, -0.70, -0.62,
            -0.67, -0.64, -0.59, -0.42, -0.64, -0.48, -0.39, -0.36, -0.31, -0.25, -0.08, -0.17, 0.00, 0.06, 0.08,
            0.00, 0.03, 0.00, 0.00, 0.03, 3.72, 5.54, 5.04, 4.79, 4.70, 4.51, 4.37, 4.45, 6.13, 7.20, 8.37, 9.18, 
            9.16, 9.07, 9.10, 9.16, 9.18, 9.30, 9.49, 9.66, 9.80
          ],
          borderColor: "green",
          fill: false,
        },
        {
          label: "Anchor Depth: 3 mtr",
          data: [0.00, -0.08, 0.84, 1.06, 0.67, 0.90, 0.92, 0.70, 0.36, 1.06, 1.15, 1.09, 1.20, 1.15, 1.01, 0.98, 1.04,
            1.15, 1.18, 1.20, 1.06, 1.23, 1.29, 1.37, 1.40, 1.43, 1.29, 1.46, 1.54, 1.57, 1.51, 1.57, 1.54, 1.51, 
            1.62, 8.74, 4.17, 3.25, 3.02, 2.91, 2.77, 2.66, 2.72, 4.62, 5.77, 6.58, 7.22, 8.68, 9.04, 9.77, 9.91, 
            10.16, 10.50, 10.81, 11.03, 11.17
          ],
          borderColor: "orange",
          fill: false,
        },
      ],
      info: {
        instrument: "210608",
        location: "Level 11 North, 13 X cut",
        installation: "From May 2022 to April 2023",
        temp: "22°C",
        height: "19 Mtr",
        observation: "Strata is stable, no critical changes observed.",
      },
    },
    "L11 North 11 X-cut": {
      labels: ['17-05-2022', '18-05-2022', '19-05-2022', '20-05-2022', '22-05-2022', '23-05-2022', '26-05-2022', '30-05-2022',
         '05-06-2022', '12-06-2022', '19-06-2022', '26-05-2022', '03-07-2022', '10-07-2022', '17-07-2022', '24-07-2022', 
         '31-07-2022', '07-08-2022', '14-08-2022', '21-08-2022', '28-08-2022', '05-09-2022', '12-09-2022', '19-09-2022', 
         '26-09-2022', '03-10-2022', '10-10-2022', '17-10-2022', '24-10-2022', '31-10-2022', '04-11-2022', '11-11-2022', 
         '18-11-2022', '25-11-2022', '02-12-2022', '09-12-2022', '16-12-2022', '23-12-2022', '30-12-2022', '06-01-2023', 
         '13-01-2023', '20-01-2023', '27-01-2023', '03-02-2023', '10-02-2023', '17-02-2023', '24-02-2023', '03-03-2023', 
         '10-03-2023', '17-03-2023', '24-03-2023', '31-03-2023', '07-04-2023', '14-04-2023', '20-04-2023', '28-04-2023'],
      datasets: [
        {
          label: "Anchor Depth: 12 mtr",
          data: [0.00, 0.14, -0.06, 0.28, 0.28, -0.03, 0.17, 0.31, 0.34, -0.03, 0.25, 0.03, 0.62, 0.64, 0.59, 0.56, 0.62, 0.39,
             0.42, 0.64, 0.59, 0.62, 0.48, 0.39, 0.45, 0.39, 0.50, 0.36, 0.34, 0.36, 0.39, 0.36, 0.39, 0.42, 0.50, 100.83, 
             100.69, 100.63, 100.72, 100.80, 100.69, 100.63, 100.46, 100.32, 99.90, 99.71, 99.57, 99.65, 99.85, 100.07, 
             100.13, 100.27, 100.35, 100.41, -35.17, -35.17],
          borderColor: "blue",
          fill: false,
        },
        {
          label: "Anchor Depth: 9 mtr",
          data: [0.00, 0.06, 0.25, 0.11, 0.11, 0.22, 0.28, 0.25, 0.08, 0.17, 0.36, 0.39, 0.67, 0.64, 0.50, 0.48, 0.45, 0.53, 
            0.59, 0.62, 0.56, 0.53, 0.56, 0.39, 0.42, 0.48, 0.39, 0.50, 0.53, 0.59, 0.56, 0.62, 0.67, 0.73, 0.62, 98.00, 
            98.20, 98.20, 98.08, 98.25, 98.20, 98.31, 98.39, 98.59, 98.48, 98.70, 98.87, 99.04, 99.15, 99.26, 99.29, 99.46, 
            99.57, 99.71, -31.00, -31.00],
          borderColor: "red",
          fill: false,
        },
        {
          label: "Anchor Depth: 6 mtr",
          data: [0.00, 0.14, 0.06, 0.23, 0.29, 0.29, 0.41, 0.52, 0.64, 0.52, 0.67, 0.78, 0.81, 0.70, 0.75, 0.72, 0.52, 0.55, 
            0.55, 0.61, 0.67, 0.70, 0.67, 0.84, 0.75, 0.72, 0.64, 0.58, 0.70, 0.81, 0.67, 0.70, 0.70, 0.67, 0.61, 80.33, 
            80.59, 83.64, 83.67, 83.78, 84.10, 84.16, 84.22, 84.51, 84.77, 85.00, 85.20, 85.12, 84.74, 84.94, 85.09, 85.20, 
            85.29, 85.46, -32.19, -32.19],
          borderColor: "green",
          fill: false,
        },
        {
          label: "Anchor Depth: 3 mtr",
          data: [0.00, 0.17, 0.17, 0.22, 0.06, 0.28, 0.56, 0.50, 0.53, 0.48, 0.64, 0.76, 0.78, 0.78, 0.59, 0.62, 0.59, 0.64, 
            0.81, 0.78, 0.81, 0.67, 0.70, 0.78, 0.62, 0.84, 0.81, 0.76, 0.73, 0.70, 0.67, 0.70, 0.64, 0.59, 0.62, 
            83.19, 83.52, 83.92, 83.61, 83.52, 83.64, 83.50, 83.41, 83.55, 83.47, 83.69, 83.83, 84.03, 84.08, 84.25, 84.34, 
            84.48, 84.53, 84.64, -28.00, -28.00],
          borderColor: "orange",
          fill: false,
        },
      ],
      info: {
        instrument: "210606",
        location: "Level 11 North, 11 X cut",
        installation: "From May 2022 to April 2023",
        temp: "22°C",
        height: "13 Mtr",
        observation: "Strata is stable, no critical changes observed.",
      },
    },
    "L11 North 15 X-cut": {
      labels: ['17-05-2022', '18-05-2022', '19-05-2022', '20-05-2022', '22-05-2022', '23-05-2022', '26-05-2022', '30-05-2022',
         '05-06-2022', '12-06-2022', '19-06-2022', '26-05-2022', '03-07-2022', '10-07-2022', '17-07-2022', '24-07-2022', 
         '31-07-2022', '07-08-2022', '14-08-2022', '21-08-2022', '28-08-2022', '04-09-2022', '11-09-2022', '18-09-2022', 
         '25-09-2022', '02-10-2022', '09-10-2022', '16-10-2022', '23-10-2022', '30-10-2022', '04-11-2022', '11-11-2022', 
         '18-11-2022', '25-11-2022', '02-12-2022', '09-12-2022', '16-12-2022', '23-12-2022', '30-12-2022', '06-01-2023', 
         '13-01-2023', '20-01-2023', '27-01-2023', '03-02-2023', '10-02-2023', '17-02-2023', '24-02-2023', '03-03-2023', 
         '10-03-2023', '17-03-2023', '24-03-2023', '31-03-2023', '07-04-2023', '14-04-2023', '20-04-2023', '28-04-2023'],
      datasets: [
        {
          label: "Anchor Depth: 12 mtr",
          data: [0.00, 0.08, -0.06, 0.31, -0.22, -0.48, -1.29, -2.63, -2.60, -2.63, -0.31, -1.04, -0.50, -0.84, -1.46, -1.34,
             -1.12, -0.81, -0.78, -0.98, -0.73, -0.70, -0.67, -0.64, -0.50, -0.48, -0.36, -0.39, -0.45, -0.42, -0.45, -0.42,
              -0.45, -0.39, -0.34, 8.60, 11.76, 12.35, 13.61, 13.50, 13.69, 13.78, 13.86, 13.75, 13.58, 13.36, 13.30, 14.11,
               14.70, 16.16, 16.97, 18.26, 17.53, 16.94, 16.46, 16.07],
          borderColor: "blue",
          fill: false,
        },
        {
          label: "Anchor Depth: 9 mtr",
          data: [0.00, 0.17, 1.65, 0.90, 1.26, 0.14, 1.74, 1.18, 1.54, 1.82, 1.48, 1.32, 1.46, 1.51, 1.57, 1.60, 1.62, 1.60, 
            1.68, 1.74, 1.79, 1.82, 1.85, 1.90, 1.76, 1.74, 1.88, 1.93, 2.13, 2.16, 2.10, 2.04, 2.10, 2.10, 2.13, 15.26, 
            11.23, 12.04, 12.35, 12.46, 12.32, 12.63, 12.52, 12.57, 12.63, 12.74, 12.88, 14.03, 16.04, 16.88, 18.40, 19.32, 
            19.26, 19.21, 19.18, 19.12],
          borderColor: "red",
          fill: false,
        },
        {
          label: "Anchor Depth: 6 mtr",
          data: [0.00, 0.14, 0.92, 1.15, 0.59, 0.95, 0.70, 1.12, 1.04, 1.12, 0.95, 0.62, 0.87, 0.95, 0.98, 1.01, 1.04, 0.92, 
            0.90, 0.87, 1.18, 0.76, 0.84, 0.92, 0.95, 1.15, 0.98, 1.06, 1.12, 1.15, 2.12, 2.15, 2.09, 2.15, 2.18, 14.88, 6.93,
             6.61, 5.68, 5.80, 5.89, 5.77, 5.92, 7.42, 8.67, 10.53, 12.15, 13.54, 14.47, 15.43, 16.33, 16.88, 15.92, 14.96, 
             14.24, 13.75],
          borderColor: "green",
          fill: false,
        },
        {
          label: "Anchor Depth: 3 mtr",
          data: [0.00, -0.84, -0.36, -0.48, -0.14, -0.08, -0.84, -0.78, 0.08, 0.06, -0.73, -0.78, -0.34, -0.53, -0.56, -0.50, 
            -0.45, -0.42, -0.39, -0.31, -0.34, -0.28, -0.22, -0.11, -0.17, -0.08, -0.06, -0.03, 0.00, 0.06, 0.00, -0.08, -0.03,
             0.03, 0.00, 3.84, 3.84, 3.67, 3.61, 3.64, 3.58, 3.72, 3.84, 3.98, 4.23, 4.70, 4.87, 5.04, 5.26, 5.52, 5.77, 5.91, 
             7.14, 8.60, 9.83, 10.50],
          borderColor: "orange",
          fill: false,
        },
      ],
      info: {
        instrument: "210605",
        location: "Level 11 North, 15 X cut",
        installation: "From May 2022 to April 2023",
        temp: "22°C",
        height: "23 Mtr",
        observation: "Strata is stable, no critical changes observed.",
      },
    },
    
  };

  const selectedData = dataSets[selectedCrossCut] || {
    labels: [],
    datasets: [],
    info: {
      instrument: "N/A",
      location: "Select a location",
      installation: "N/A",
      temp: "N/A",
      height: "N/A",
      observation: "Select a location to see observations.",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 to-gray-900 text-white p-4 sm:p-6">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          Study of Ground Behaviour in Underground Metal Mines
        </h1>
        <p className="text-sm text-gray-400 mt-2">
          Vis-à-vis Conventional and IoT-based Instrumentation
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Chart Section */}
        <div className="flex-1 bg-gray-800 rounded-lg shadow-xl p-4 sm:p-6">
          <h2 className="text-xl font-semibold mb-4">ExtensoMeter Data</h2>
          <Line
            data={{
              labels: selectedData.labels,
              datasets: selectedData.datasets,
            }}
            options={{
              responsive: true,
              plugins: {
                legend: { position: "top" },
                title: { display: true, text: "ExtensoMeter" },
              },
              scales: {
                x: {
                  grid: { color: "rgba(255, 255, 255, 0.1)" },
                  ticks: { color: "rgba(255, 255, 255, 0.7)" },
                },
                y: {
                  grid: { color: "rgba(255, 255, 255, 0.1)" },
                  ticks: { color: "rgba(255, 255, 255, 0.7)" },
                },
              },
            }}
          />

          {/* Location Selection Dropdown */}
          <div className="mt-6">
            <div className="relative inline-block text-left w-full">
              <button
                type="button"
                className="inline-flex justify-between w-full px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all"
                onClick={() => setIsOpen(!isOpen)}
              >
                {selectedCrossCut || selectedLevel || "Select Location"}
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5">
                  {Object.keys(levels).map((level) => (
                    <div key={level} className="relative">
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-600 text-white cursor-pointer"
                        onClick={() => setSelectedLevel(selectedLevel === level ? null : level)}
                      >
                        {level}
                      </button>

                      {selectedLevel === level && (
                        <div className="ml-4 mt-1 w-full bg-gray-600 text-white shadow-md rounded-md">
                          {levels[level].map((crossCut) => (
                            <div
                              key={crossCut}
                              className="px-4 py-2 hover:bg-gray-500 cursor-pointer"
                              onClick={() => {
                                setSelectedCrossCut(crossCut);
                                setIsOpen(false);
                              }}
                            >
                              {crossCut}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Information Section */}
        <div className="w-full lg:w-1/4 flex flex-col gap-6">
          <div className="bg-gray-800 rounded-lg shadow-xl p-4 sm:p-6">
            <h2 className="text-xl font-semibold mb-4">Information</h2>
            <div className="space-y-4">
              <p>
                <span className="font-bold">Instrument S No:</span>{" "}
                {selectedData.info.instrument}
              </p>
              <p>
                <span className="font-bold">Location:</span>{" "}
                {selectedData.info.location}
              </p>
              <p>
                <span className="font-bold">Installation Date:</span>{" "}
                {selectedData.info.installation}
              </p>
              <p>
                <span className="font-bold">Calibration Temp:</span>{" "}
                {selectedData.info.temp}
              </p>
              <p>
                <span className="font-bold">Stope Height:</span>{" "}
                {selectedData.info.height}
              </p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-xl p-4 sm:p-6">
            <h2 className="text-xl font-semibold mb-4">Observation</h2>
            <p>{selectedData.info.observation}</p>
          </div>
        </div>
      </div>

      {/* Home Button */}
      <div className="mt-8 text-center">
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all"
        >
          Home
        </Link>
      </div>
      <div className=" bg-gray-850 h-[100px]">

      </div>
    </div>
  );
};

export default ExtensoMeter;