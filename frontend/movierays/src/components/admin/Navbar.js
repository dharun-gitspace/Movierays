import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-black p-4 flex justify-between items-center">
      {/* Header content inside Navbar */}
      <div className="text-yellow-300 text-3xl font-bold tracking-wide">
        MOVIERAYS
      </div>

      <div className="flex items-center gap-6">
        {/* Account dropdown */}
        <div className="relative group">
          <button className="flex items-center space-x-2 text-yellow-300 focus:outline-none">
            <FaUserCircle size={24} />
            <span>My Account</span>
          </button>

          {/* Dropdown menu */}
          <div className="absolute right-0 mt-2 w-48 bg-gray-800 shadow-slate-50 rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 ease-in-out">
            <a
              href="#"
              className="block px-4 py-2 text-yellow-300 hover:bg-black"
            >
              Edit Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-yellow-300 hover:bg-black"
            >
              View Profile
            </a>
          </div>
        </div>

        {/* Sign Out Button */}
        <button className="bg-yellow-300 px-4 py-2 text-black rounded-md">
          Sign Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
