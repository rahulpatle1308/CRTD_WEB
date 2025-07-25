import React, { useState } from "react";
import axios from "axios";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    if (!formData.agreed) {
      toast.warning("You must agree to the terms and conditions.");
      return;
    }

    try {
      await axios.post("http://localhost:3000/users/register", {
        username: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        confirmPassword: formData.password,
      });

      toast.success("Registered successfully!", {
        position: "top-right",
        autoClose: 2000,
        onClose: () => navigate("/dashboard"),
      });
    } catch (err) {
      toast.error(err?.response?.data?.message || "Signup failed.");
    }
  };

  return (
    <div>
      <ToastContainer />
      <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center text-xl font-bold text-gray-800">
          <img src="crtdLogo.png" alt="CRTD Logo" className="w-10 h-10 mr-2" />
          CRTD Technologies
        </div>
      </header>

      <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
        {/* Left Form Section */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 space-y-5">
            <div className="flex justify-center">
              <img src="crtdLogo.png" alt="logo" className="w-16 h-16" />
            </div>
            <h2 className="text-2xl font-bold text-center text-gray-800">Create Account</h2>
            <p className="text-center text-gray-500 text-sm">Join our community of tech professionals</p>

            <div className="relative flex items-center border rounded-lg px-3 py-2">
              <FaUser className="text-gray-500 mr-3" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full focus:outline-none"
                required
              />
            </div>

            <div className="relative flex items-center border rounded-lg px-3 py-2">
              <FaEnvelope className="text-gray-500 mr-3" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full focus:outline-none"
                required
              />
            </div>

            <div className="relative flex items-center border rounded-lg px-3 py-2">
              <FaPhone className="text-gray-500 mr-3" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full focus:outline-none"
                required
              />
            </div>

            <div className="relative flex items-center border rounded-lg px-3 py-2">
              <FaLock className="text-gray-500 mr-3" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full focus:outline-none"
                required
              />
            </div>

            <div className="relative flex items-center border rounded-lg px-3 py-2">
              <FaLock className="text-gray-500 mr-3" />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="w-full focus:outline-none"
                required
              />
            </div>

            <div className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                className="w-4 h-4"
              />
              <span>
                I agree to the{" "}
                <a href="#" className="text-blue-500 underline">
                  Terms and Conditions
                </a>
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
            >
              Create Account
            </button>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-blue-500 underline">
                Sign in instead
              </a>
            </p>
          </div>
        </div>

        {/* Right Info Section */}
        <div className="flex-1 bg-white flex items-center justify-center p-8">
          <div className="max-w-md space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Join Our Tech Community</h2>
            {/* Job Highlights */}
            <div className="flex space-x-4 items-start">
              <div className="w-12 h-12">
                <img src="./S1.svg" alt="Illustration 1" className="w-full h-full" />
              </div>
              <div>
                <strong className="block text-gray-700">Exclusive Job Opportunities</strong>
                <p className="text-gray-500 text-sm">Access to premium tech positions from top companies</p>
              </div>
            </div>
            <div className="flex space-x-4 items-start">
              <div className="w-12 h-12">
                <img src="./S2.svg" alt="Illustration 2" className="w-full h-full" />
              </div>
              <div>
                <strong className="block text-gray-700">Career Growth</strong>
                <p className="text-gray-500 text-sm">Professional development and learning resources</p>
              </div>
            </div>
            <div className="flex space-x-4 items-start">
              <div className="w-12 h-12">
                <img src="./S1.svg" alt="Illustration 3" className="w-full h-full" />
              </div>
              <div>
                <strong className="block text-gray-700">Verified Companies</strong>
                <p className="text-gray-500 text-sm">All employers are thoroughly vetted for quality</p>
              </div>
            </div>

            <div className="flex space-x-8 mt-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-600">5000+</h3>
                <p className="text-sm text-gray-600">Tech Jobs</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-600">100+</h3>
                <p className="text-sm text-gray-600">Partner Companies</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
