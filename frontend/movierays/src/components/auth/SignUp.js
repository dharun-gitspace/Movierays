import React, { useState } from "react";
import MovieSlider from "../shared/Movieslider";
import { useLocation, Link, useNavigate } from "react-router-dom"; // Import useNavigate
import authService from "../../services/auth.service";
import axios from "axios";

const SignUp = () => {
  const location = useLocation();
  const emailFromState = location.state?.email || "";
  
  // Define state variables
  const [email, setEmail] = useState(emailFromState);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [dob, setDob] = useState("");
  const [fullName, setFullName] = useState(""); // State for Full Name
  const [password, setPassword] = useState(""); // State for Password
  const [confirmPassword, setConfirmPassword] = useState(""); // State for Confirm Password
  const navigate = useNavigate(); // Use navigate to redirect

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Check if the email exists
      const response = await axios.get(
        `http://localhost:8080/api/user/check-email?email=${email}`
      );

      if (response.data) {
        alert("Email already exists. Please use a different email."); // Notify user
      } else {
        // If email does not exist, proceed to register
        await authService.register(fullName, email, password); // Ensure you pass the password
        alert("Registration successful!"); // Notify success
        navigate("/login"); // Redirect to login page after successful registration
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed. Please try again."); // Notify error
    }
  };

  return (
    <div className="relative h-screen bg-black">
      <div className="absolute inset-0">
        <div className="h-full w-full opacity-30">
          <MovieSlider />
        </div>
      </div>

      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="bg-black/75 p-10 rounded-lg shadow-2xl max-w-md w-full mx-5">
          <h1 className="text-center text-5xl font-bold text-yellow-300 mb-8">
            MOVIERAYS
          </h1>

          {/* Sign-Up Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <h2 className="figtree-bold text-center text-2xl text-white mb-4">
              Create your account
            </h2>

            {/* Full Name Input */}
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-300 p-3 figtree-semibold shadow-md focus:outline-none focus:ring focus:ring-yellow-500"
                placeholder="Full Name"
                value={fullName} // Bind fullName state
                onChange={(e) => setFullName(e.target.value)} // Update state on change
              />
            </div>

            {/* Date of Birth Input */}
            <div className="relative">
              <input
                type="date"
                className="w-full rounded-lg border-gray-300 p-3 figtree-semibold shadow-md focus:outline-none focus:ring focus:ring-yellow-500"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-300 p-4 pr-12 figtree-semibold shadow-md focus:outline-none focus:ring focus:ring-yellow-500"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full rounded-lg border-gray-300 p-3 figtree-semibold shadow-md focus:outline-none focus:ring focus:ring-yellow-500"
                placeholder="Enter password"
                value={password} // Bind password state
                onChange={(e) => setPassword(e.target.value)} // Update password state
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
                value={confirmPassword} // Bind confirmPassword state
                onChange={(e) => setConfirmPassword(e.target.value)} // Update confirmPassword state
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
              <Link to="/login" className="underline text-yellow-300 hover:text-yellow-400">
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
