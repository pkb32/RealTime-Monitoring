import React, { useState } from "react";
import { Link } from "react-router-dom";

const ManageUser = () => {
  // Sample user data
  const [users, setUsers] = useState([
    { name: "Signam Jayantu", phone: "9938303259", email: "sjayanthu@yahoo.com", designation: "Co-Investigator" },
    { name: "Abhaya Kumar Samal", phone: "9437141314", email: "abhaya@tat.ac.in", designation: "Principal Investigator" },
    { name: "Jitendra Prammanik", phone: "7978738612", email: "jitendra.pramanik@cutm.ac.in", designation: "Phd Research Scholar" },
    { name: "Prayash Kumar Behera", phone: "9776992132", email: "prayashkumarb@gmail.com", designation: "Btech Research Scholar" },
  ]);

  return (
    <div className="bg-[#1446A0] w-full min-h-screen flex flex-col items-center p-4 sm:p-6">
      {/* Page Title and Home Button */}
      <div className="w-full max-w-5xl flex items-center justify-between mb-4 sm:mb-6">
        <h1 className="text-white text-xl sm:text-2xl font-bold">Contact Persons</h1>
        <Link
          to="/"
          className="bg-[#11365c] text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-[#aec4ed] transition text-sm sm:text-base"
        >
          Home
        </Link>
      </div>

      {/* User Table */}
      <div className="w-full max-w-5xl bg-white/10 backdrop-blur-lg p-3 sm:p-5 rounded-lg shadow-lg border border-gray-500 overflow-x-auto">
        <table className="w-full text-left text-white">
          {/* Table Header */}
          <thead>
            <tr className="bg-blue-800 text-white">
              <th className="p-2 sm:p-3">Name</th>
              <th className="p-2 sm:p-3">Phone Number</th>
              <th className="p-2 sm:p-3">Email</th>
              <th className="p-2 sm:p-3">Designation</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className="border-b border-gray-500 hover:bg-blue-700 transition-all"
              >
                <td className="p-2 sm:p-3">{user.name}</td>
                <td className="p-2 sm:p-3">{user.phone}</td>
                <td className="p-2 sm:p-3">{user.email}</td>
                <td className="p-2 sm:p-3">{user.designation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;