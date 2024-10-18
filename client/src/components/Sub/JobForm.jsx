// JobForm.js
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
    <form
      className="p-6 w-full max-w-lg bg-white shadow-lg rounded-lg"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label className="block mb-2 text-gray-700">Job Title</label>
        <input
          type="text"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="Enter Job Title"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-gray-700">Job Description</label>
        <textarea
          name="jobDescription"
          value={formData.jobDescription}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="Enter Job Description"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-gray-700">Experience Level</label>
        <select
          name="experienceLevel"
          value={formData.experienceLevel}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
        >
          <option value="" disabled>
            Select Experience Level
          </option>
          <option value="junior">Junior</option>
          <option value="mid">Mid</option>
          <option value="senior">Senior</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-gray-700">Add Candidate</label>
        <input
          type="email"
          name="candidates"
          value={formData.candidates}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="xyz@gmail.com"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-gray-700">End Date</label>
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Send
      </button>
    </form>
  );
};

export default JobForm;
