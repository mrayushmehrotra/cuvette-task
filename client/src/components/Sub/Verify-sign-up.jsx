import React, { useState } from "react";
import axios from "axios";

const SignupOTP = () => {
  const [emailOTP, setEmailOTP] = useState("");
  const [mobileOTP, setMobileOTP] = useState("");
  const [verified, setVerified] = useState({ email: true, phone: true });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "emailOTP") setEmailOTP(value);
    if (name === "mobileOTP") setMobileOTP(value);
  };

  // Function to verify the email OTP
  const handleEmailOTPVerification = async () => {
    try {
      const response = await axios.post("/api/verify-email-otp", { emailOTP });
      if (response.data.success) {
        setVerified({ ...verified, email: true });
      }
    } catch (error) {
      console.error("Email OTP verification failed", error);
    }
  };

  // Function to verify the mobile OTP
  const handleMobileOTPVerification = async () => {
    try {
      const response = await axios.post("/api/verify-mobile-otp", {
        mobileOTP,
      });
      if (response.data.success) {
        setVerified({ ...verified, phone: true });
      }
    } catch (error) {
      console.error("Mobile OTP verification failed", error);
    }
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
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        {/* Email OTP Input */}
        <div className="mb-4 relative">
          <label className="block mb-1 text-gray-700">Email OTP</label>
          <div className="flex items-center">
            <input
              type="text"
              name="emailOTP"
              value={emailOTP}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border bg-[#cccccca9] rounded-lg placeholder-black"
              placeholder="Enter Email OTP"
            />
            {/* Show green check if verified */}
            {verified.email && (
              <i className="fas fa-check-circle text-green-500 ml-2 text-2xl"></i>
            )}
          </div>
          <button
            onClick={handleEmailOTPVerification}
            className="w-full mt-2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Verify Email OTP
          </button>
        </div>

        {/* Mobile OTP Input */}
        <div className="mb-4 relative">
          <label className="block mb-1 text-gray-700">Mobile OTP</label>
          <div className="flex items-center">
            <input
              type="text"
              name="mobileOTP"
              value={mobileOTP}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border bg-[#cccccca9] rounded-lg placeholder-black"
              placeholder="Enter Mobile OTP"
            />
            {/* Show green check if verified */}
            {verified.phone && (
              <i className="fas fa-check-circle text-green-500 ml-2 text-2xl"></i>
            )}
          </div>
          <button
            onClick={handleMobileOTPVerification}
            className="w-full mt-2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Verify Mobile OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupOTP;
