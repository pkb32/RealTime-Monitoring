import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


const Reports = () => {
  const [reports, setReports] = useState([]);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null); // Track which dropdown is open

  useEffect(() => {
    // Load reports from local storage when the component mounts
    const storedReports = JSON.parse(localStorage.getItem("reports")) || [];
    setReports(storedReports);
  }, []);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newReport = { name: file.name, data: reader.result };
        const updatedReports = [...reports, newReport];

        setReports(updatedReports);
        localStorage.setItem("reports", JSON.stringify(updatedReports));
      };
      reader.readAsDataURL(file);
    } else {
      alert("Only PDF files are allowed!");
    }
  };

  const handleDelete = (index) => {
    const updatedReports = reports.filter((_, i) => i !== index);
    setReports(updatedReports);
    localStorage.setItem("reports", JSON.stringify(updatedReports));
    setOpenDropdownIndex(null); // Close dropdown after deletion
  };

  const handleOpen = (reportData) => {
    const newTab = window.open();
    newTab.document.write(`
      <iframe src="${reportData}" width="100%" height="100%" style="border:none;"></iframe>
    `);
  };

  const handleDownload = (report) => {
    const link = document.createElement("a");
    link.href = report.data;
    link.download = report.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 bg-gray-900 text-white">
      {/* Page Title */}
      <div className="w-full max-w-5xl flex items-center justify-between mb-4 sm:mb-6">
        <h1 className="text-white text-xl sm:text-2xl font-bold">📑 Reports</h1>
        <Link
          to="/"
          className="bg-[#11365c] text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-[#aec4ed] transition text-sm sm:text-base"
        >
          Home
        </Link>
      </div>

      {/* Upload Button */}
      <label className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded cursor-pointer inline-block text-sm sm:text-base">
        Upload Report
        <input type="file" accept="application/pdf" className="hidden" onChange={handleUpload} />
      </label>

      {/* Reports List */}
      <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {reports.map((report, index) => (
          <div key={index} className="bg-gray-800 p-3 sm:p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <h3 className="text-base sm:text-lg font-semibold">{report.name}</h3>
              {/* Dropdown for Mobile */}
              <div className="relative sm:hidden">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="p-1 rounded hover:bg-gray-700 focus:outline-none"
                >
                  <span className="text-xl">⋯</span> {/* Three-dot icon */}
                </button>
                {/* Dropdown Menu */}
                {openDropdownIndex === index && (
                  <div className="absolute right-0 mt-2 w-40 bg-gray-700 rounded-lg shadow-lg z-10">
                    <button
                      onClick={() => handleOpen(report.data)}
                      className="w-full px-4 py-2 text-left text-white hover:bg-gray-600 flex items-center"
                    >
                      <span className="mr-2">📖</span> Open
                    </button>
                    <button
                      onClick={() => handleDownload(report)}
                      className="w-full px-4 py-2 text-left text-white hover:bg-gray-600 flex items-center"
                    >
                      <span className="mr-2">⬇️</span> Download
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="w-full px-4 py-2 text-left text-white hover:bg-gray-600 flex items-center"
                    >
                      <span className="mr-2">❌</span> Delete
                    </button>
                  </div>
                )}
              </div>
              {/* Buttons for Larger Screens */}
              <div className="hidden sm:flex space-x-2">
                <button
                  onClick={() => handleOpen(report.data)}
                  className="bg-green-500 hover:bg-green-400 px-3 py-1 rounded text-white"
                >
                  📖 Open
                </button>
                <button
                  onClick={() => handleDownload(report)}
                  className="bg-blue-500 hover:bg-blue-400 px-3 py-1 rounded text-white"
                >
                  ⬇️ Download
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 hover:bg-red-400 px-3 py-1 rounded text-white"
                >
                  ❌ Delete
                </button>
              </div>
            </div>
            <div className="mt-3 sm:mt-4 bg-gray-700 p-2 rounded h-48 sm:h-64 overflow-hidden">
              <iframe src={report.data} className="w-full h-full"></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;