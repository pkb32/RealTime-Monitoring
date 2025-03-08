import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LoadCell = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedCrossCut, setSelectedCrossCut] = useState(null);

  const levels = {
    "Level 12": ["L12 North 7 X-cut", "L12 South 61 X-cut"],
    "Level 13": ["L13 South 49 X-cut"],
  };

  // Example datasets for different cross-cuts
  const dataSets = {
    "L12 North 7 X-cut": {
      labels: ['13-05-2022', '15-05-2022', '16-05-2022', '17-05-2022', '18-05-2022', '19-05-2022', '23-05-2022', '27-05-2022',
         '31-05-2022', '07-06-2022', '14-06-2022', '21-06-2022', '28-06-2022', '05-07-2012', '12-07-2022', '19-07-2022', 
         '26-07-2022', '02-08-2022', '09-08-2022', '16-08-2022', '23-08-2022', '30-08-2022', '06-09-2022', '13-09-2022', 
         '20-09-2022', '27-09-2022', '04-10-2022', '11-10-2022', '18-10-2022', '25-10-2022', '04-11-2022', '11-11-2022', 
         '18-11-2022', '25-11-2022', '02-12-2022', '09-12-2022', '16-12-2022', '23-12-2022', '30-12-2022', '06-01-2023', 
         '13-01-2023', '20-01-2023', '27-01-2023', '03-02-2023', '10-02-2023', '17-02-2023', '24-02-2023', '03-03-2023', 
         '10-03-2023', '17-03-2023', '24-03-2023', '31-03-2023', '07-04-2023', '14-04-2023', '21-04-2023', '28-04-2023', 
         '05-05-2023', '12-05-2023', '19-05-2023', '26-05-2023', '02-06-2023', '09-06-2023', '16-06-2023', '23-06-2023', 
         '30-06-2023', '07-07-2023', '14-07-2023', '21-07-2023', '28-07-2023', '04-08-2023', '11-08-2023', '18-08-2023', 
         '25-08-2023', '01-09-2023', '08-09-2023', '15-09-2023', '22-09-2023', '29-09-2023', '06-10-2023', '13-10-2023', 
         '20-10-2023', '27-10-2023', '03-11-2023', '10-11-2023', '17-11-2023', '24-11-2023', '01-12-2023', '08-12-2023', 
         '15-12-2023', '22-12-2023', '29-12-2024', '05-01-2024', '12-01-2024', '19-01-2024', '28-01-2024', '04-02-2024', 
         '11-02-2024', '18-02-2024', '25-02-2024', '03-03-2024', '10-03-2024', '17-03-2024', '24-03-2024', '31-03-2024', 
         '07-04-2024', '14-04-2024', '21-04-2024', '28-04-2024', '05-05-2024', '12-05-2024', '19-05-2024', '26-05-2024', 
         '02-06-2024', '09-06-2024', '16-06-2024', '23-06-2024', '30-06-2024', '07-07-2024', '14-07-2024', '21-07-2024', 
         '28-07-2024', '04-08-2024', '11-08-2024', '18-08-2024', '25-08-2024', '01-09-2024', '08-09-2024', '15-09-2024', 
         '22-09-2024', '29-09-2024', '06-10-2024', '13-10-2024', '20-10-2024', '27-10-2024', '05-11-2024', '12-11-2024', 
         '19-11-2024', '26-11-2024', '03-12-2024', '10-12-2024', '17-12-2024'],
      values: [0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 
        0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, -0.17, -0.17,
         -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, 
         -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, 
         -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, 
         -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, 
         -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, 
         -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, 
         -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, -0.17, 
         -0.17],
      info: {
        instrument: "210612",
        location: "Level 12 North, 7 X cut",
        installation: "From May 2022 to December 2024",
        temp: "22°C",
        height: "15 Mtr",
        observation: "Strata is stable, no critical changes observed.",
      },
    },
    "L12 South 61 X-cut": {
      labels: ['13-05-2022', '15-05-2022', '16-05-2022', '17-05-2022', '18-05-2022', '19-05-2022', '23-05-2022', 
        '27-05-2022', '31-05-2022', '07-06-2022', '14-06-2022', '21-06-2022', '28-06-2022', '05-07-2012', '12-07-2022', 
        '19-07-2022', '26-07-2022', '02-08-2022', '09-08-2022', '16-08-2022', '23-08-2022', '30-08-2022', '06-09-2022', 
        '13-09-2022', '20-09-2022', '27-09-2022', '04-10-2022', '11-10-2022', '18-10-2022', '25-10-2022', '04-11-2022', 
        '11-11-2022', '18-11-2022', '25-11-2022', '02-12-2022', '09-12-2022', '16-12-2022', '23-12-2022', '30-12-2022', 
        '06-01-2023', '13-01-2023', '20-01-2023', '27-01-2023', '03-02-2023', '10-02-2023', '17-02-2023', '24-02-2023', 
        '03-03-2023', '10-03-2023', '17-03-2023', '24-03-2023', '31-03-2023', '07-04-2023', '14-04-2023', '21-04-2023', 
        '28-04-2023', '05-05-2023', '12-05-2023', '19-05-2023', '26-05-2023', '02-06-2023', '09-06-2023', '16-06-2023', 
        '23-06-2023', '30-06-2023', '07-07-2023', '14-07-2023', '21-07-2023', '28-07-2023', '04-08-2023', '11-08-2023', 
        '18-08-2023', '25-08-2023', '01-09-2023', '08-09-2023', '15-09-2023', '22-09-2023', '29-09-2023', '06-10-2023', 
        '13-10-2023', '20-10-2023', '27-10-2023', '03-11-2023', '10-11-2023', '17-11-2023', '24-11-2023', '01-12-2023', 
        '08-12-2023', '15-12-2023', '22-12-2023', '29-12-2024', '05-01-2024', '12-01-2024', '19-01-2024', '28-01-2024', 
        '04-02-2024', '11-02-2024', '18-02-2024', '25-02-2024', '03-03-2024', '10-03-2024', '17-03-2024', '24-03-2024', 
        '31-03-2024', '07-04-2024', '14-04-2024', '21-04-2024', '28-04-2024', '05-05-2024', '12-05-2024', '19-05-2024', 
        '26-05-2024', '02-06-2024', '09-06-2024', '16-06-2024', '23-06-2024', '30-06-2024', '07-07-2024', '14-07-2024', 
        '21-07-2024', '28-07-2024', '04-08-2024', '11-08-2024', '18-08-2024', '25-08-2024', '01-09-2024', '08-09-2024', 
        '15-09-2024', '22-09-2024', '29-09-2024', '06-10-2024', '13-10-2024'],
      values: [0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
         0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, -0.21, -0.21, 
         -0.21, -0.21, -0.21, -0.21, -0.21, -0.21, -0.36, -0.36, -0.36, -0.36, -0.36, -0.36, -0.36, -0.36, -0.36, -0.36,
          -0.36, -0.36, -0.36, -0.36, -0.36, -0.36, -0.36, -0.36, -0.36, -0.36, -0.36, -0.36, -0.36, -0.36, -0.36, -0.36,
           -0.36, -0.36, -0.36, -0.36, -0.36, -0.36, -0.36, -0.36, -0.36, -0.36, -0.36, -0.36, -0.36, -0.36, -0.36, -0.36,
            -0.36, -0.36, -0.36, -0.36, -0.36, -0.36, -0.36, -0.36, -0.36, -0.36, -0.36, 0.50, 0.50, 0.50, 0.50, 0.50, 0.50, 
            0.50, 0.50, 0.50, 0.50, 0.50, 0.50, 0.50, 0.50, 0.50, 0.50, 0.50, 0.50, 0.50, 0.50, 0.50, 0.50, 0.50, 0.50, 0.50, 
            0.50, 0.50, 0.50, 0.50, 0.50, 0.50, 0.50, 0.50, 0.50, 0.50, 0.50],
      info: {
        instrument: "210613",
        location: "Level 12 South, 61 X cut",
        installation: "From May 2022 to October 2024",
        temp: "22°C",
        height: "25 Mtr",
        observation: "Minor deviations detected, but within safe limits.",
      },
    },
   
    "L13 South 49 X-cut": {
      labels: ['13-05-2022', '15-05-2022', '16-05-2022', '17-05-2022', '18-05-2022', '19-05-2022', '23-05-2022',
        '27-05-2022', '31-05-2022', '07-06-2022', '14-06-2022', '21-06-2022', '28-06-2022', '05-07-2012', '12-07-2022',
         '19-07-2022', '26-07-2022', '02-08-2022', '09-08-2022', '16-08-2022', '23-08-2022', '30-08-2022', '06-09-2022',
          '13-09-2022', '20-09-2022', '27-09-2022', '04-10-2022', '11-10-2022', '18-10-2022', '25-10-2022', '04-11-2022'
          , '11-11-2022', '18-11-2022', '25-11-2022', '02-12-2022', '09-12-2022', '16-12-2022', '23-12-2022', 
          '30-12-2022', '06-01-2023', '13-01-2023', '20-01-2023', '27-01-2023', '03-02-2023', '10-02-2023', '17-02-2023',
           '24-02-2023', '03-03-2023', '10-03-2023', '17-03-2023', '24-03-2023', '31-03-2023', '07-04-2023', '14-04-2023', 
           '21-04-2023', '28-04-2023', '05-05-2023', '12-05-2023', '19-05-2023', '26-05-2023', '02-06-2023', '09-06-2023', 
           '16-06-2023', '23-06-2023', '30-06-2023', '07-07-2023', '14-07-2023', '21-07-2023', '28-07-2023', '04-08-2023', 
           '11-08-2023', '18-08-2023', '25-08-2023', '01-09-2023', '08-09-2023', '15-09-2023', '22-09-2023', '29-09-2023', 
           '06-10-2023', '13-10-2023', '20-10-2023', '27-10-2023', '03-11-2023', '10-11-2023', '17-11-2023', '24-11-2023', 
           '01-12-2023', '08-12-2023', '15-12-2023', '22-12-2023', '29-12-2024', '05-01-2024', '12-01-2024', '19-01-2024', 
           '28-01-2024', '04-02-2024', '11-02-2024', '18-02-2024', '25-02-2024', '03-03-2024', '10-03-2024', '17-03-2024', 
           '24-03-2024', '31-03-2024', '07-04-2024', '14-04-2024', '21-04-2024', '28-04-2024', '05-05-2024', '12-05-2024', 
           '19-05-2024', '26-05-2024', '02-06-2024', '09-06-2024', '16-06-2024', '23-06-2024', '30-06-2024', '07-07-2024', 
           '14-07-2024', '21-07-2024', '28-07-2024', '04-08-2024', '11-08-2024', '18-08-2024', '25-08-2024', '01-09-2024', 
           '08-09-2024', '15-09-2024', '22-09-2024', '29-09-2024', '06-10-2024', '13-10-2024', '20-10-2024', '27-10-2024', 
           '05-11-2024', '12-11-2024', '19-11-2024', '26-11-2024', '03-12-2024', '10-12-2024', '17-12-2024'
],
      values: [0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
        0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
         0.00, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12,
          -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, 
          -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, 
          -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, 
          -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, 
          -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, 
          -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, -0.12, 
          -0.12, -0.12, -0.12, -0.12, -0.12],
      info: {
        instrument: "210610",
        location: "Level 13 South 49 X-cut",
        installation: "From May 2022 to Dec 2024",
        temp: "23°C",
        height: "12 Mtr",
        observation: "The reading of load cells is fairly constant over time. But on 2.12.2022 at 13.5th level the development resumed on 49th X-CUT after some time and on that day the blasting operation was conducted at the same level for production. This resulted in deviation of reading in the Load Cell.",
      },
    },
  };
  const selectedData = dataSets[selectedCrossCut] || {
    labels: [],
    values: [],
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
  <h2 className="text-xl font-semibold mb-4">Load Cell Data</h2>
  {/* Chart Container with Dynamic Height */}
  <div className="h-64 sm:h-96"> {/* Adjust height for mobile and desktop */}
    <Line
      data={{
        labels: selectedData.labels,
        datasets: [
          {
            label: "Cumulative Difference",
            data: selectedData.values,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderWidth: 2,
            pointRadius: 4, // Slightly larger points for better visibility
            pointBackgroundColor: "rgba(75, 192, 192, 1)",
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false, // Ensure the chart fits the container
        plugins: {
          legend: { position: "top" },
          title: { display: true, text: "Load Cell" },
        },
        scales: {
          x: {
            grid: { color: "rgba(255, 255, 255, 0.1)" },
            ticks: { color: "rgba(255, 255, 255, 0.7)",
              maxTicksLimit: 5,
            },
            
          },
          y: {
            grid: { color: "rgba(255, 255, 255, 0.1)" },
            ticks: { color: "rgba(255, 255, 255, 0.7)",
              maxTicksLimit: 5
             },
            
          },
        },
      }}
    />
  </div>

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
        <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5 z-10">
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

export default LoadCell;