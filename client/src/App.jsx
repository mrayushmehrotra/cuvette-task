// App.js
import React, { useState } from "react";
import Sidebar from "./components/Main/Sidebar";
import JobForm from "./components/Sub/JobForm";

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const handleHomeClick = () => {
    setShowForm(true);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar onHomeClick={handleHomeClick} />

      {/* Main Content */}
      <div className="flex-grow p-6">
        {showForm ? (
          <JobForm />
        ) : (
          <div className="text-gray-600">
            Click on the home icon to fill out the job details form.
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
