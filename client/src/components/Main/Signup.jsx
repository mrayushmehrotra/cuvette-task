import React, { useState } from "react";
import person_icon from "/person_icon.png"; // Assuming you have the icon at this path
import Call_icon from "/call.png"; // Assuming you have the icon at this path
import Group_icon from "/groups.png"; // Assuming you have the icon at this path
import mail_icon from "/mail.png"; // Assuming you have the icon at this path
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    companyName: "",
    companyEmail: "",
    employeeSize: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    navigate("/home");
    alert("Data Submitted");
  };

  return (
    <div className="flex py-24 justify-around items-center min-h-screen ">
      <div className="max-w-[40%]">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt id
          enim sint. Atque expedita obcaecati explicabo libero quas quam
          recusandae. Illo odio ex veniam vitae tempore totam pariatur eligendi
          veritatis!
        </p>
      </div>
      <div className="p-6 border rounded-lg shadow-2xl w-full max-w-md">
        <h2 className="text-2xl text-center font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Input with Icon */}
          <div className="mb-4 relative">
            <label className="block mb-1 text-gray-700">Name</label>
            <img
              src={person_icon}
              alt="person icon"
              className="absolute left-3 top-12 transform -translate-y-1/2 w-4 h-4"
            />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-12 placeholder:text-zinc-900 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Name"
              required
            />
          </div>

          {/* Phone Number Input with Icon */}
          <div className="mb-4 relative">
            <label className="block mb-1 text-gray-700">Phone no.</label>
            <img
              src={Call_icon}
              alt="phone icon"
              className="absolute left-3 top-12 transform -translate-y-1/2 w-4 h-4"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full pl-12 placeholder:text-zinc-900 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Phone no."
              required
            />
          </div>

          {/* Company Name Input with Icon */}
          <div className="mb-4 relative">
            <label className="block mb-1 text-gray-700">Company Name</label>
            <img
              src={person_icon}
              alt="company icon"
              className="absolute left-3 top-12 transform -translate-y-1/2 w-4 h-4"
            />
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full pl-12 placeholder:text-zinc-900 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Company Name"
              required
            />
          </div>

          {/* Company Email Input with Icon */}
          <div className="mb-4 relative">
            <label className="block mb-1 text-gray-700">Company Email</label>
            <img
              src={mail_icon}
              alt="email icon"
              className="absolute left-3 top-12 transform -translate-y-1/2 w-4 h-4"
            />
            <input
              type="email"
              name="companyEmail"
              value={formData.companyEmail}
              onChange={handleChange}
              className="w-full pl-12 placeholder:text-zinc-900 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Company Email"
              required
            />
          </div>

          {/* Employee Size Input with Icon */}
          <div className="mb-4 relative">
            <label className="block mb-1 text-gray-700">Employee Size</label>
            <img
              src={Group_icon}
              alt="employee size icon"
              className="absolute left-3 top-12 transform -translate-y-1/2 w-6 h-6"
            />
            <input
              type="number"
              name="employeeSize"
              value={formData.employeeSize}
              onChange={handleChange}
              className="w-full pl-12 placeholder:text-zinc-900 border-gray-300 px-4 py-2 border  rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Employee Size"
              required
            />
          </div>

          {/* Terms and Conditions */}
          <div className="text-sm text-gray-600 mb-4">
            By clicking on proceed you will accept our{" "}
            <a href="#" className="text-blue-500">
              Terms & Conditions
            </a>
            .
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            onClick={handleSubmit}
          >
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
