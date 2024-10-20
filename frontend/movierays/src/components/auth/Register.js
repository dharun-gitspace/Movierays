import React, { useState } from "react";
import MovieSlider from "../shared/Movieslider";

const SignUp = () => {
  const [countryCode, setCountryCode] = useState("+1"); // Default country code
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [dob, setDob] = useState(""); // State for Date of Birth

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="relative h-screen bg-black">
      {/* MovieSlider as background */}
      <div className="absolute inset-0">
        <div className="h-full w-full opacity-30">
          <MovieSlider />
        </div>
      </div>

      {/* Sign-Up form positioned above the MovieSlider */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="bg-black/75 p-10 rounded-lg shadow-2xl max-w-md w-full mx-5">
          {/* App Title */}
          <h1 className="text-center text-5xl font-bold text-yellow-300 mb-8">
            MOVIERAYS
          </h1>

          {/* Sign-Up Form */}
          <form className="space-y-5">
            <h2 className="figtree-bold text-center text-2xl text-white mb-4">
              Create your account
            </h2>

            {/* Full Name Input */}
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-300 p-3 figtree-semibold shadow-md focus:outline-none focus:ring focus:ring-yellow-500"
                placeholder="Full Name"
              />
            </div>

            {/* Date of Birth Input */}
            <div className="relative">
              <input
                type="date"
                className="w-full rounded-lg border-gray-300 p-3 figtree-semibold shadow-md focus:outline-none focus:ring focus:ring-yellow-500"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                placeholder="Date of Birth"
              />
            </div>

            {/* Phone with Country Selector */}
            <div className="relative">
              <div className="flex">
                <select
                  className="rounded-l-lg border-gray-300 p-3 figtree-semibold shadow-md focus:outline-none focus:ring focus:ring-yellow-500"
                  value={countryCode}
                  onChange={handleCountryCodeChange}
                >
                  <option value="+1">+1 (USA)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+91">+91 (India)</option>
                  {/* Add more countries as needed */}
                </select>
                <input
                  type="tel"
                  className="w-full rounded-r-lg border-gray-300 p-3 figtree-semibold shadow-md focus:outline-none focus:ring focus:ring-yellow-500"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full rounded-lg border-gray-300 p-3 figtree-semibold shadow-md focus:outline-none focus:ring focus:ring-yellow-500"
                placeholder="Enter password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 text-gray-500"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* Confirm Password Input */}
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="w-full rounded-lg border-gray-300 p-3 figtree-semibold shadow-md focus:outline-none focus:ring focus:ring-yellow-500"
                placeholder="Confirm password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 text-gray-500"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex justify-center items-center rounded-md bg-yellow-300 px-4 py-2 text-black transition-all duration-300 hover:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-600"
            >
              <span className="text-base figtree-bold">Register User</span>
            </button>

            {/* Link to Sign-in */}
            <p className="text-center text-sm text-gray-400">
              Already have an account?{" "}
              <a
                className="underline text-yellow-300 hover:text-yellow-400"
                href="#"
              >
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
