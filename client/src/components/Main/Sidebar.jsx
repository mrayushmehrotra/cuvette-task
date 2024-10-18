// Sidebar.js
import React from "react";
import { FaHome } from "react-icons/fa"; // Import Home icon

const Sidebar = ({ onHomeClick }) => {
  return (
    <div className="flex flex-col h-screen bg-gray-100 p-4 shadow-lg">
      <div className="mb-6 cursor-pointer" onClick={onHomeClick}>
        <FaHome className="text-2xl text-gray-600 hover:text-blue-500" />
      </div>
    </div>
  );
};

export default Sidebar;
