import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AdminAccess = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 to-gray-900 p-4 sm:p-6 flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-4xl flex items-center justify-center relative mb-6 sm:mb-8">
        <h1 className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 sm:py-6 text-center text-2xl sm:text-3xl font-bold shadow-lg rounded-lg">
          Admin Access Panel
        </h1>
        <Link
          to="/"
          className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-gradient-to-r from-[#146BD0] to-[#0C4A8F] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:from-[#aec4ed] hover:to-[#7a9cd6] transition-all shadow-md text-sm sm:text-base"
        >
          Home
        </Link>
      </div>

      {/* Admin Control Panel */}
      <div className="mt-4 sm:mt-6 bg-white/10 backdrop-blur-sm shadow-2xl rounded-lg p-4 sm:p-8 w-full max-w-4xl">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">
          Admin Actions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Contact Persons Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg overflow-hidden"
          >
            <Link
              to="/manage-users"
              className="flex flex-col items-center justify-center p-4 sm:p-6 text-white hover:bg-blue-700 transition-all"
            >
              <span className="text-3xl sm:text-4xl mb-2 sm:mb-4">👤</span>
              <span className="text-lg sm:text-xl font-semibold text-center">
                Contact Persons
              </span>
            </Link>
          </motion.div>

          {/* View Reports Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-lg overflow-hidden"
          >
            <Link
              to="/reports"
              className="flex flex-col items-center justify-center p-4 sm:p-6 text-white hover:bg-green-700 transition-all"
            >
              <span className="text-3xl sm:text-4xl mb-2 sm:mb-4">📊</span>
              <span className="text-lg sm:text-xl font-semibold text-center">
                View Reports
              </span>
            </Link>
          </motion.div>

          {/* Access Dashboard Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg shadow-lg overflow-hidden"
          >
            <Link
              to="/dashboard"
              className="flex flex-col items-center justify-center p-4 sm:p-6 text-white hover:bg-purple-700 transition-all"
            >
              <span className="text-3xl sm:text-4xl mb-2 sm:mb-4">📈</span>
              <span className="text-lg sm:text-xl font-semibold text-center">
                Access Dashboard
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdminAccess;