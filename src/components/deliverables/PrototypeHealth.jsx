import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import { Link } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const HealthOfPrototype = () => {
  const [parts, setParts] = useState([
    { id: 1, name: 'Main Board', health: 85, status: 'working', history: [85, 80, 78, 82, 85] },
    { id: 2, name: 'LED Panel', health: 45, status: 'not working', history: [45, 50, 48, 47, 45] },
    { id: 3, name: 'Battery Backup', health: 90, status: 'working', history: [90, 88, 89, 91, 90] },
    { id: 4, name: 'HX711 Module ', health: 95, status: 'working', history: [95, 94, 96, 95, 95] },
    { id: 5, name: 'Power Supply', health: 30, status: 'not working', history: [30, 35, 32, 31, 30] },
    { id: 6, name: 'ESP32 Module', health: 80, status: 'working', history: [80, 78, 79, 81, 80] },
    { id: 7, name: 'USB Connector', health: 70, status: 'working', history: [70, 72, 71, 69, 70] },
    { id: 8, name: 'Wifi Module', health: 49, status: 'not working', history: [49, 50, 48, 92, 49] },
  ]);
  const [notifications, setNotifications] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(true);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setParts((prevParts) =>
        prevParts.map((part) => {
          const newHealth = Math.min(100, Math.max(0, part.health + (Math.random() - 0.5) * 10));
          const newStatus = newHealth > 50 ? 'working' : 'not working';

          // Add notification for critical failures
          if (newStatus === 'not working' && part.status === 'working') {
            const newNotification = { id: Date.now(), message: `${part.name} has failed!`, type: 'error' };
            setNotifications((prev) => [...prev, newNotification]);

            // Automatically remove the notification after 3 seconds
            setTimeout(() => {
              setNotifications((prev) => prev.filter((n) => n.id !== newNotification.id));
            }, 3000);
          }

          return {
            ...part,
            health: newHealth,
            status: newStatus,
            history: [...part.history.slice(1), newHealth], // Update history
          };
        })
      );
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Filter parts based on search query
  const filteredParts = parts.filter((part) =>
    part.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} p-4 sm:p-8`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8">
        <h1 className="text-white text-2xl font-bold mb-6 text-center">Health of Prototype</h1>
        <div className="hidden md:flex items-center justify-center">
          <Link
            to="/"
            className="absolute top-10 right-72 bg-[#11365c] text-white px-4 py-2 rounded-lg hover:bg-[#aec4ed] transition"
          >
            Home
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
          />
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>

      {/* Notifications */}
      {notifications.length > 0 && (
        <div className="mb-6 sm:mb-8">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 rounded-lg shadow-lg mb-2 ${
                notification.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
              } text-white`}
            >
              {notification.message}
            </div>
          ))}
        </div>
      )}

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {/* Arduino Controller Card (Center) */}
        <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-1 flex justify-center items-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className={`p-6 rounded-lg shadow-lg text-center w-full max-w-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
          >
            <h2 className="text-2xl font-semibold mb-4">Arduino Controller</h2>
            <div className="text-6xl">🖥️</div>
            <p className="mt-4 text-green-400">Status: Operational</p>
          </motion.div>
        </div>

        {/* Component Status Cards */}
        {filteredParts.map((part) => (
          <motion.div
            key={part.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`p-6 rounded-lg shadow-lg text-center relative group ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
          >
            <h2 className="text-xl font-semibold mb-4">{part.name}</h2>
            <div className="text-4xl">
              {part.status === 'working' ? '✅' : '❌'}
            </div>
            <p
              className={`mt-4 ${
                part.status === 'working' ? 'text-green-400' : 'text-red-400'
              }`}
            >
              Status: {part.status}
            </p>

            {/* Progress Bar */}
            <div className="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${part.health}%` }}
                transition={{ duration: 1 }}
                className={`h-full ${
                  part.health > 70
                    ? 'bg-gradient-to-r from-green-400 to-green-600'
                    : part.health > 40
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-600'
                    : 'bg-gradient-to-r from-red-400 to-red-600'
                }`}
              />
            </div>

            {/* Historical Data Chart */}
            <div className="mt-4 h-32 sm:h-40">
              <Line
                data={{
                  labels: ['5m ago', '4m ago', '3m ago', '2m ago', '1m ago'],
                  datasets: [
                    {
                      label: 'Health Trend',
                      data: part.history,
                      borderColor: part.health > 70 ? '#4ade80' : part.health > 40 ? '#facc15' : '#f87171',
                      backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: { display: false },
                  },
                }}
              />
            </div>

            {/* Tooltip */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-700 text-white px-3 py-2 rounded-lg shadow-lg">
              Health: {part.health}%
            </div>
          </motion.div>
        ))}
      </div>

      {/* Home Button for Mobile */}
      <div className="mt-8 text-center block sm:hidden">
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default HealthOfPrototype;