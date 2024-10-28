import React, { useState } from "react";
import AuthService from "../../services/auth.service";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const EditProfile = () => {
  const currentUser = AuthService.getCurrentUser();

  const [name, setName] = useState(currentUser.name || "");
  const [email, setEmail] = useState(currentUser.email || "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    // Check if passwords match
    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    try {
      const updatedUser = {
        id: currentUser.id,
        name,
        email,
        password,
      };

      const response = await AuthService.editProfile(updatedUser);
      console.log("Profile updated:", response.data); // Accessing data safely
      setMessage("Profile updated successfully!");
    } catch (error) {
      setMessage(
        "Error updating profile: " + (error.response?.data || "Unknown error")
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Navbar />
      <Link
        to={"/homepage"}
        className="block text-center py-8 figtree-bold text-xl text-yellow-300 hover:text-yellow-400"
      >
        Go Back Home
      </Link>
      <div className="flex items-center justify-center flex-grow pb-12"></div>
      <div className="p-6 bg-gray-900 rounded-lg shadow-md max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-yellow-300 mb-4">
          Edit Profile
        </h2>
        {message && <div className="text-yellow-300 mb-4">{message}</div>}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-700 p-2 rounded-md bg-black text-white"
            placeholder="Edit Name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-700 p-2 rounded-md bg-black text-white"
            placeholder="Edit Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-700 p-2 rounded-md bg-black text-white"
            placeholder="New Password"
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border border-gray-700 p-2 rounded-md bg-black text-white"
            placeholder="Confirm New Password"
          />
          <button
            type="submit"
            className="bg-yellow-300 px-4 py-2 text-black rounded-md"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
