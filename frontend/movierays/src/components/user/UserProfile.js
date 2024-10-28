import React from "react";
import { Link } from "react-router-dom";
import AuthService from "../../services/auth.service";
import Navbar from "./Navbar"; // Ensure you import the Navbar

const UserProfile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Navbar />
      <Link
        to={"/homepage"}
        className="block text-center py-8 figtree-bold text-xl text-yellow-300 hover:text-yellow-400"
      >
        Go Back Home
      </Link>
      <div className="flex items-center justify-center flex-grow pb-12">
        <div className="bg-black text-white rounded-lg shadow-lg max-w-xl w-full">
          <div className="p-8 space-y-4">
            <header className="mb-8">
              <h3 className="text-4xl font-bold text-yellow-300 text-center">
                User profile
              </h3>
            </header>
            <div className="space-y-4 text-lg">
              <p>
                <strong>User Name:</strong> {currentUser.name}
              </p>
              <p>
                <strong>Token:</strong>{" "}
                {currentUser.accessToken.substring(0, 20)} ...{" "}
                {currentUser.accessToken.substr(
                  currentUser.accessToken.length - 20
                )}
              </p>
              <p>
                <strong>Id:</strong> {currentUser.id}
              </p>
              <p>
                <strong>Email:</strong> {currentUser.email}
              </p>
              <p>
                <strong>Roles:</strong> {currentUser.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
