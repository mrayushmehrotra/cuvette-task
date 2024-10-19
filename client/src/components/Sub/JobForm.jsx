import React, { useState } from "react";

const JobForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobDescription: "",
    experienceLevel: "",
    candidates: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="flex justify-center  items-center min-h-[80%] bg-gray-50">
      <form className="p-8 w-full max-w-2xl bg-white" onSubmit={handleSubmit}>
        {/* Job Title */}
        <div className="mb-6  ">
          <label className="block  text-sm font-medium text-gray-600 mb-2">
            Job Title
          </label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
            placeholder="Enter Job Title"
          />
        </div>

        {/* Job Description */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Job Description
          </label>
          <textarea
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
            placeholder="Enter Job Description"
            rows="4"
          />
        </div>

        {/* Experience Level */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Experience Level
          </label>
          <select
            name="experienceLevel"
            value={formData.experienceLevel}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
          >
            <option value="" disabled>
              Select Experience Level
            </option>
            <option value="junior">Junior</option>
            <option value="mid">Mid</option>
            <option value="senior">Senior</option>
          </select>
        </div>

        {/* Add Candidate */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Add Candidate
          </label>
          <input
            type="email"
            name="candidates"
            value={formData.candidates}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
            placeholder="xyz@gmail.com"
          />
        </div>

        {/* End Date */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            End Date
          </label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default JobForm;
