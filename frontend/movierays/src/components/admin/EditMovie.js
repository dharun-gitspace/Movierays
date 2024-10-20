import React from "react";

const EditMovie = () => {
  return (
    <div className="p-6 bg-gray-900 rounded-lg shadow-md max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-yellow-300 mb-4">Edit Movie</h2>
      <form className="space-y-6">
        <input
          type="text"
          className="w-full border border-gray-700 p-2 rounded-md bg-black text-white"
          placeholder="Search for a movie to edit"
        />

        <input
          type="text"
          className="w-full border border-gray-700 p-2 rounded-md bg-black text-white mt-4"
          placeholder="Edit movie name"
        />
        <input
          type="text"
          className="w-full border border-gray-700 p-2 rounded-md bg-black text-white"
          placeholder="Edit directors"
        />
        <button type="submit" className="bg-yellow-300 px-4 py-2 text-black rounded-md">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditMovie;
