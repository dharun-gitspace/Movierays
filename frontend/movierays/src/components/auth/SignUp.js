import React, { useState } from "react";
import MovieSlider from "../shared/Movieslider";
import { useLocation, Link } from "react-router-dom"; // Import useLocation to access navigation state
const SignUp = () => {
  // Access the email from the navigation state
  const location = useLocation();
  const emailFromState = location.state?.email || ""; // Default to an empty string if no email is provided
  const [email, setEmail] = useState(emailFromState); // Initialize email state with the value from the state
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [dob, setDob] = useState(""); // State for Date of Birth

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Update the email state
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

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-300 p-4 pr-12 figtree-semibold shadow-md focus:outline-none focus:ring focus:ring-yellow-500"
                placeholder="Enter email"
                value={email} // Set the value from state
                onChange={handleEmailChange} // Update email state on change
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
              <Link to ={"/login"}
                className="underline text-yellow-300 hover:text-yellow-400"
                href="#"
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
