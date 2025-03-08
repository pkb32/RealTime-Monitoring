import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Client, Storage, ID } from "appwrite";

// Initialize Appwrite
const client = new Client()
.setEndpoint("https://cloud.appwrite.io/v1") // Replace with your Appwrite server URL if hosted remotely
.setProject("67cb387e000e2f38aff9"); // Replace with your actual Project ID

const storage = new Storage(client);

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null); // Track which dropdown is open

  // Load reports from Appwrite Storage when the component mounts
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await storage.listFiles("67cb3ee0002aa33fc76c"); // Replace with your bucket ID
        const files = response.files;
    
        // Fetch file view URLs for PDFs
        const reportsWithData = await Promise.all(
          files.map(async (file) => {
            const fileUrl = await storage.getFileView("67cb3ee0002aa33fc76c", file.$id);
            return { id: file.$id, name: file.name, data: fileUrl };
          })
        );
    
        setReports(reportsWithData);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };

    fetchReports();
  }, []);

  // Handle file upload
  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      try {
        // Upload file to Appwrite Storage
        const response = await storage.createFile(
          "67cb3ee0002aa33fc76c", // Replace with your bucket ID
          ID.unique(), // Generate a unique ID for the file
          file
        );

        // Get file preview URL
        const fileUrl = await storage.getFilePreview("67cb3ee0002aa33fc76c", response.$id);

        // Add the new report to the state
        const newReport = { id: response.$id, name: file.name, data: fileUrl };
        setReports((prevReports) => [...prevReports, newReport]);
      } catch (error) {
        console.error("Error uploading file:", error);
        alert("Failed to upload the file. Please try again.");
      }
    } else {
      alert("Only PDF files are allowed!");
    }
  };

  // Handle file deletion
  const handleDelete = async (id) => {
    try {
      // Delete file from Appwrite Storage
      await storage.deleteFile("67cb3ee0002aa33fc76c", id);

      // Remove the report from the state
      setReports((prevReports) => prevReports.filter((report) => report.id !== id));
      setOpenDropdownIndex(null); // Close dropdown after deletion
    } catch (error) {
      console.error("Error deleting file:", error);
      alert("Failed to delete the file. Please try again.");
    }
  };

  // Handle opening a report in a new tab
  const handleOpen = (reportData) => {
    const newTab = window.open();
    newTab.document.write(`
      <iframe src="${reportData}" width="100%" height="100%" style="border:none;"></iframe>
    `);
  };

  // Handle downloading a report
  const handleDownload = async (report) => {
    try {
      // Get file download URL
      const fileUrl = await storage.getFileDownload("67cb3ee0002aa33fc76c", report.id);

      // Trigger download
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = report.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading file:", error);
      alert("Failed to download the file. Please try again.");
    }
  };

  // Toggle dropdown menu
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
          <div key={report.id} className="bg-gray-800 p-3 sm:p-4 rounded-lg shadow-md">
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
                      onClick={() => handleDelete(report.id)}
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
                  onClick={() => handleDelete(report.id)}
                  className="bg-red-500 hover:bg-red-400 px-3 py-1 rounded text-white"
                >
                  ❌ Delete
                </button>
              </div>
            </div>
            <div className="mt-3 sm:mt-4 bg-gray-700 p-2 rounded h-48 sm:h-64 overflow-hidden">
              <iframe
                src={report.data}
                className="w-full h-full"
                title={report.name}
                allow="autoplay; fullscreen"
              ></iframe>
</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;