import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Popover } from "@headlessui/react"; // Using Popover from HeadlessUI

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="bg-black p-4 flex justify-between items-center">
      {/* Header */}
      <div className="text-yellow-300 text-3xl font-bold tracking-wide">
        MOVIERAYS
      </div>

      <div className="flex items-center gap-6">
        {/* Subscription Popover */}
        <Popover className="relative">
          <Popover.Button className="text-yellow-300">My Subscription</Popover.Button>

          <Popover.Panel className="absolute z-10 mt-2 w-64 bg-gray-800 text-yellow-300 rounded-md p-4 shadow-lg">
            <p>Plan: Premium</p>
            <p>Expires: 20 Oct 2024</p>
            <p>Features: Unlimited Movies, 4K Streaming</p>
          </Popover.Panel>
        </Popover>

        {/* Account dropdown */}
        <div className="relative">
          <button
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
            className="flex items-center space-x-2 text-yellow-300 focus:outline-none"
          >
            <FaUserCircle size={24} />
            <span>My Account</span>
          </button>

          {isDropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg"
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <a href="#" className="block px-4 py-2 text-yellow-300 hover:bg-black">
                Edit Profile
              </a>
              <a href="#" className="block px-4 py-2 text-yellow-300 hover:bg-black">
                View Profile
              </a>
            </div>
          )}
        </div>

        {/* Log Out Button */}
        <button className="bg-yellow-300 px-4 py-2 text-black rounded-md">
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
