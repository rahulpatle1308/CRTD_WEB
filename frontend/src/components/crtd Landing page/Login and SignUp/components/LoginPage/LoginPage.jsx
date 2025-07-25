import React, { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        email,
        password,
      });

      const { token, user } = response.data;

      // Save token (optional)
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

        toast.success("Login successfully!", {
         position: "top-right",
         autoClose: 2000,
         onClose: () => navigate("/dashboard"),
       });
    } catch (err) {
       toast.success("Worng password and Email", {
         position: "top-right",
         autoClose: 2000,
         style: {
    background: "white",
    color: "red",
  },
       });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gray-100 py-4 px-6 shadow-md">
        <div className="flex items-center text-xl font-semibold text-gray-800">
          <img src="crtdLogo.png" alt="CRTD Logo" className="w-8 h-8 mr-2" /> CRTD Technologies
        </div>
      </header>

      <div className="flex flex-col md:flex-row min-h-[calc(100vh-5rem)]">
        <div className="w-full md:w-1/2 flex items-center justify-center p-6">
          <form
            onSubmit={handleLogin}
            className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg"
          >
            <div className="flex justify-center mb-4">
              <img src="crtdLogo.png" alt="CRTD Logo" className="w-12 h-12" />
            </div>
            <h2 className="text-black font-bold text-2xl text-center mb-2">Welcome Back!</h2>
            <p className="text-gray-600 text-sm text-center mb-6">
              Sign in to access your career opportunities
            </p>

            <div className="flex items-center border border-gray-300 rounded px-3 py-2 mb-4">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full outline-none"
              />
            </div>

            <div className="flex items-center border border-gray-300 rounded px-3 py-2 mb-4">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full outline-none"
              />
            </div>

            <div className="flex justify-between items-center text-sm text-gray-600 mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Sign In
            </button>

            <p className="text-center text-sm text-gray-700 mt-4">
              Don’t have an account?{' '}
              <a href="/signUp" className="text-blue-500 hover:underline">Sign up now</a>
            </p>
          </form>
        </div>

        <div className="w-full md:w-1/2 bg-blue-50 flex items-center justify-center p-10">
          <div className="max-w-md text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Start Your Tech Career Journey</h2>
            <p className="text-gray-600 mb-6">
              Connect with top tech companies and find your dream job with CRTD Technologies
            </p>
            <div className="flex justify-around">
              <div className="text-center">
                <h3 className="text-xl font-bold text-blue-600">5000+</h3>
                <p className="text-gray-700">Placements</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-blue-600">100+</h3>
                <p className="text-gray-700">Companies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
