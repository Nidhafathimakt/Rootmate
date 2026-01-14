import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen overflow-hidden bg-white">

      <div className="flex h-full">

        {/* LEFT SECTION */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 sm:px-10 lg:px-12 relative">

          {/* Header */}
          <h1 className="text-3xl sm:text-4xl font-bold flex items-center gap-3">
            Login
            <span className="text-xs bg-red-500 text-white px-3 py-1 rounded-full">
              Hotel
            </span>
          </h1>

          <p className="mt-2 text-gray-600 flex items-center gap-2 text-sm sm:text-base">
            Lets get started <span>😀</span>
          </p>

          {/* Form */}
          <div className="w-full max-w-md mt-6 sm:mt-8 space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button className="w-full bg-blue-600 text-white text-base py-2.5 rounded-lg hover:bg-blue-700 transition">
              Login
            </button>
          </div>

          {/* Signup */}
          <p className="mt-4 text-gray-700 text-sm">
            Don’t have an account ?
            <Link to="/signup"><span className="text-blue-600 cursor-pointer ml-1">
              signup
            </span></Link>
            
          </p>

          {/* Social Login */}
          <div className="flex gap-4 mt-5">
            <div className="w-12 h-12 border rounded-full flex items-center justify-center cursor-pointer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                alt="google"
                className="w-6"
              />
            </div>

            <div className="w-12 h-12 border rounded-full flex items-center justify-center cursor-pointer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="facebook"
                className="w-6"
              />
            </div>
          </div>

          {/* Cartoon Image (only desktop) */}
          <img
            src="https://i.ibb.co/DzYzJ6J/cartoon-girl.png"
            alt="cartoon"
            className="hidden md:block absolute bottom-0 left-6 w-28"
          />
        </div>

        {/* RIGHT SECTION (IMAGE) */}
        <div className="hidden md:block md:w-1/2 h-full">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt="mountain"
            className="h-full w-full object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default Login;
