import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Link } from 'react-router-dom';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Chart data
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Cost (in USD)',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-gray-800 text-white p-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <nav className="mt-8">
          <ul>
            <li className="mb-4">
              <Link to="/" className="flex items-center hover:text-gray-400">
                <span className="mr-2">🏠</span> Home
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/manage-users" className="flex items-center hover:text-gray-400">
                <span className="mr-2">👤</span> Users
              </Link>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center hover:text-gray-400">
                <span className="mr-2">📊</span> Analytics
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center hover:text-gray-400">
                <span className="mr-2">⚙️</span> Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg">🔔</button>
            <button
              onClick={toggleDarkMode}
              className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <div className="flex items-center">
              <img
                src="data:image/png;base64,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"
                alt="Profile"
                className="rounded-full w-[50px] h-[50px]"
              />
              <span className="ml-2">MOIL</span>
            </div>
          </div>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className={`p-6 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-xl font-semibold">Total Instruments</h2>
            <p className="text-3xl font-bold">50</p>
          </div>
          <div className={`p-6 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-xl font-semibold">Installation Cost</h2>
            <p className="text-3xl font-bold">$22,942.78</p>
          </div>
          <div className={`p-6 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-xl font-semibold">Active Projects</h2>
            <p className="text-3xl font-bold">23</p>
          </div>
        </div>

        {/* Chart */}
        <div className={`p-6 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className="text-xl font-semibold mb-4">Opex & Capex</h2>
          <Bar data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;