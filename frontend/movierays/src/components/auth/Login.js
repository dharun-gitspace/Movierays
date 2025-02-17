import React, { useState, useRef } from "react";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import MovieSlider from "../shared/Movieslider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};
const Login = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const form = useRef();
  const checkBtn = useRef();

  const emailFromState = location.state?.email || "";
  const [email, setEmail] = useState(emailFromState);
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [message, setMessage] = useState("");
  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Update the email state
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value); // Update the password state
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage(""); // Reset message on form submission

    form.current.validateAll(); // Validate the form

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(email, password).then(
        (response) => {
          // Extract token from the Authorization header
          const token = response.headers["authorization"]?.split(" ")[1]; // Get token part after "Bearer"

          if (token) {
            // Decode the JWT token (assuming it's in the form of 'Bearer <token>')
            const payload = JSON.parse(atob(token.split(".")[1])); // Decode the payload of the JWT

            const userRole = payload.role; // Assuming `role` is included in the token payload

            // Navigate based on the user's role
            if (userRole === "ADMIN") {
              navigate("/admin");
            } else if (userRole === "USER") {
              navigate("/homepage");
            } else {
              console.error("Unknown user role:", userRole);
            }
          } else {
            console.error("Token not found in response headers.");
          }
        },
        (error) => {
          const resMessage =
            error.response && error.response.data // Check if response exists
              ? error.response.data // Use the entire response body if it's available
              : error.message || error.toString(); // Fallback to error message or string
          setMessage(resMessage); // Set the error message
        }
      );
    }
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
          <Form className="space-y-8" onSubmit={handleLogin} ref={form}>
            <h2 className="figtree-bold text-center text-2xl text-white">
              Sign in to your account
            </h2>

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-300 p-4 pr-12 figtree-semibold shadow-md focus:outline-none focus:ring focus:ring-yellow-500"
                placeholder="Enter email"
                value={email} // Set the value from state
                onChange={handleEmailChange} // Update email state on change
                validations={[required, validEmail]}
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
                value={password}
                onChange={handlePasswordChange} // Update password state on change
                validations={[required]}
              />
              <span
                className="absolute inset-y-0 right-0 grid place-content-center px-4 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                <Icon icon={passwordVisible ? eyeOff : eye} size={20} />
              </span>
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
              <Link
                to={"/signup"}
                className="underline text-yellow-300 hover:text-yellow-400"
              >
                Sign up
              </Link>
            </p>
            {/* displaying the error message */}
            {message && (
              <div className="form-group">
                <div
                  className="text-red-600 figtree-semibold text-center"
                  role="alert"
                >
                  {message}
                </div>
              </div>
            )}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
