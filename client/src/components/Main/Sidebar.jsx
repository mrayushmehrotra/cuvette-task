// Sidebar.js
import React from "react";
import { FaHome } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen   bg-gray-100 p-6 shadow-lg">
      {/* Link to Home */}
      <Link to="/" className="mb-6">
        <FaHome className="text-2xl text-gray-600 hover:text-blue-500" />
      </Link>

      {/* Link to Job Form */}
    </div>
  );
};

export default Sidebar;
