import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import MovieSlider from "../shared/Movieslider";

const Login = () => {
  // State for toggling password visibility
  const [passwordVisible, setPasswordVisible] = useState(false);

  // State for 'Remember Me' checkbox
  const [rememberMe, setRememberMe] = useState(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Function to handle 'Remember Me' checkbox change
  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="relative h-screen bg-black">
      {/* MovieSlider as background */}
      <div className="absolute inset-0">
        <div className="h-full w-full opacity-30">
          <MovieSlider />
        </div>
      </div>

      {/* Login form positioned above the MovieSlider */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="bg-black/75 p-10 rounded-lg shadow-2xl max-w-md w-full mx-4">
          {/* App Title */}
          <h1 className="text-center text-5xl font-bold text-yellow-300 mb-8">
            MOVIERAYS
          </h1>

          {/* Login Form */}
          <form className="space-y-8">
            <h2 className="figtree-bold text-center text-2xl text-white">
              Sign in to your account
            </h2>

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-300 p-4 pr-12 figtree-semibold shadow-md focus:outline-none focus:ring focus:ring-yellow-500"
                placeholder="Enter email"
              />
              <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>

            {/* Password Input with Toggle */}
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                className="w-full rounded-lg border-gray-300 p-4 pr-12 figtree-semibold shadow-md focus:outline-none focus:ring focus:ring-yellow-500"
                placeholder="Enter password"
              />
              <span
                className="absolute inset-y-0 right-0 grid place-content-center px-4 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                <Icon icon={passwordVisible ? eyeOff : eye} size={20} />
              </span>
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                className="mr-2 h-5 w-5 text-black border-gray-300 rounded  checked:bg-yellow-300 checked:border-yellow-300 checked:text-black cursor-pointer"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <label
                htmlFor="rememberMe"
                className="text-sm text-gray-400 figtree-semibold"
              >
                Remember me
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex justify-center items-center rounded-md bg-yellow-300 px-6 py-3 text-black transition-all duration-300 hover:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-600"
            >
              <span className="text-base figtree-bold">Sign In</span>
            </button>

            {/* Link to Sign-up */}
            <p className="text-center text-sm text-gray-400">
              No account?{" "}
              <a
                className="underline text-yellow-300 hover:text-yellow-400"
                href="#"
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
