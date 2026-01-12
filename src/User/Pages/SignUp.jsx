import React from "react";
import mountain from "../../assets/mountain.jpg";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="h-screen flex overflow-hidden">
      
      {/* LEFT IMAGE SECTION */}
      <div className="hidden md:block md:w-1/2 h-full">
        <img
          src={mountain}
          alt="background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* RIGHT FORM SECTION */}
      <div className="w-full md:w-1/2 flex items-center justify-center relative overflow-hidden">
        
        {/* FORM */}
        <div className="w-full max-w-md px-6">
          <h2 className="text-3xl font-semibold text-center mb-1">
            sign up
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Let’s get started 😄
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              sign up
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            already have an account?{" "}
            <Link to="/login"><span className="text-blue-600 cursor-pointer hover:underline">
              Login
            </span></Link>
            
          </p>

          {/* SOCIAL LOGIN */}
          <div className="flex justify-center gap-4 mt-6">
            <button className="border rounded-full p-3 hover:bg-gray-100">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="google"
                className="w-6 h-6"
              />
            </button>

            <button className="border rounded-full p-3 hover:bg-gray-100">
              <img
                src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                alt="facebook"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>

        {/* RIGHT ILLUSTRATION */}
        {/* <img
          alt="illustration"
          className="hidden lg:block absolute bottom-0 right-0 w-44 xl:w-56 pointer-events-none"
        /> */}
      </div>
    </div>
  );
};

export default SignUp;
