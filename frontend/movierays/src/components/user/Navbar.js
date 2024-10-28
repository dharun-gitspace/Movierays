// Navbar.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import authService from "../../services/auth.service";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate for routing

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Handle logout functionality
  const handleLogout = () => {
    authService.logout(); // Clear session data
    navigate("/"); // Redirect to home route
  };

  return (
    <nav className="bg-black p-4 flex justify-between items-center">
      {/* Header content inside Navbar */}
      <div className="text-yellow-300 text-3xl font-bold tracking-wide">
        MOVIERAYS
      </div>

      <div className="flex items-center gap-6">
        {/* Account dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 text-yellow-300 focus:outline-none"
          >
            <FaUserCircle size={24} />
            <span>My Account</span>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 shadow-slate-50 rounded-lg">
              <Link
                to={"/homepage/profile/edit"}
                className="block px-4 py-2 text-yellow-300 hover:bg-black"
              >
                Edit Profile
              </Link>
              <Link
                to={"/homepage/profile"}
                className="block px-4 py-2 text-yellow-300 hover:bg-black"
              >
                View Profile
              </Link>
            </div>
          )}
        </div>

        {/* Sign Out Button */}
        <button
          onClick={handleLogout} // Call handleLogout on click
          className="bg-yellow-300 px-4 py-2 text-black rounded-md"
        >
          Sign Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
