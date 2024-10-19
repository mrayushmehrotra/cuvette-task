// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Sidebar from "./components/Main/Sidebar";
import JobForm from "./components/Sub/JobForm";

const App = () => {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar will always be visible */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-grow p-6">
          <Routes>
            {/* Define routes for different pages */}
            <Route path="/" element={<Home />} />
            <Route path="/job-form" element={<JobForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

// Home component (can be a placeholder page)
const Home = () => (
  <div className="m-5">
    <Link to="/job-form">
      <button className="bg-[#0B66EF] p-1.5 rounded-md text-white">
        Create Interview{" "}
      </button>
    </Link>
  </div>
);

export default App;
