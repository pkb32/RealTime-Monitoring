import React, { useState, useEffect } from "react";

const Reports = () => {
  const [reports, setReports] = useState([]);

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

  return (
    <div className="min-h-screen p-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-blue-400 mb-4">📑 Reports</h2>

      {/* Upload Button */}
      <label className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded cursor-pointer inline-block">
        Upload Report
        <input type="file" accept="application/pdf" className="hidden" onChange={handleUpload} />
      </label>

      {/* Reports List */}
      <div className="mt-6 grid grid-cols-2 gap-6">
        {reports.map((report, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{report.name}</h3>
              <div className="space-x-2">
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
            <div className="mt-4 bg-gray-700 p-2 rounded h-64 overflow-hidden">
              <iframe src={report.data} className="w-full h-full"></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
