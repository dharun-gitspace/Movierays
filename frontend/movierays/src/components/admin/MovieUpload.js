import React, { useState } from "react";

const MovieUpload = () => {
  const [genres] = useState(["Action", "Comedy", "Drama", "Sci-Fi"]);

  return (
    <div className="p-6 bg-gray-900 rounded-lg shadow-md max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-yellow-300 mb-4">
        Upload New Movie
      </h2>
      <form className="space-y-6">
        <div>
          <label className="block mb-1 text-yellow-300">Movie Name</label>
          <input
            type="text"
            className="w-full border border-gray-700 p-2 rounded-md bg-black text-white"
            placeholder="Enter movie name"
          />
        </div>

        <div>
          <label className="block mb-1 text-yellow-300">Directors</label>
          <input
            type="text"
            className="w-full border border-gray-700 p-2 rounded-md bg-black text-white"
            placeholder="Enter director names"
          />
        </div>

        <div>
          <label className="block mb-1 text-yellow-300">Select Genre</label>
          <select className="w-full border border-gray-700 p-2 rounded-md bg-black text-white">
            {genres.map((genre) => (
              <option key={genre}>{genre}</option>
            ))}
          </select>
        </div>

        <div className="space-x-4">
          <label className="inline-flex items-center text-yellow-300">
            <input type="radio" name="access" value="Subscription" defaultChecked />
            <span className="ml-2">Subscription</span>
          </label>
          <label className="inline-flex items-center text-yellow-300">
            <input type="radio" name="access" value="Free" />
            <span className="ml-2">Free</span>
          </label>
        </div>

        <div>
          <label className="block mb-1 text-yellow-300">Thumbnail File</label>
          <input type="file" className="w-full border border-gray-700 p-2 rounded-md bg-black text-white" />
        </div>

        <div>
          <label className="block mb-1 text-yellow-300">Movie File</label>
          <input type="file" className="w-full border border-gray-700 p-2 rounded-md bg-black text-white" />
        </div>

        <div className="flex space-x-4">
          <button type="reset" className="bg-gray-700 px-4 py-2 rounded-md text-yellow-300">
            Clear
          </button>
          <button type="submit" className="bg-yellow-300 px-4 py-2 text-black rounded-md">
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default MovieUpload;
