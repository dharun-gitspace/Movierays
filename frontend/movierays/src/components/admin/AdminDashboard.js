import React, { useState } from "react";
import Navbar from "./Navbar";
import MovieUpload from "./MovieUpload";
import EditMovie from "./EditMovie";
import LogViewer from "./LogViewer"; // Assume you will implement later

const AdminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = () => {
    switch (activeComponent) {
      case "upload":
        return <MovieUpload />;
      case "edit":
        return <EditMovie />;
      case "userLogs":
        return <LogViewer />;
      case "myLogs":
        return <LogViewer userSpecific={true} />;
      default:
        return null;
    }
  };

  const getBreadcrumb = () => {
    switch (activeComponent) {
      case "upload":
        return "Upload Movie";
      case "edit":
        return "Edit Movie Details";
      case "userLogs":
        return "View User Logs";
      case "myLogs":
        return "My Logs";
      default:
        return "Dashboard";
    }
  };

  return (
    <div className="min-h-screen bg-yellow-300">
      <Navbar />

      {/* Breadcrumbs Section */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center space-x-4 text-gray-800">
          <a
            href="#"
            className="text-black hover:text-yellow-500 font-medium"
            onClick={() => setActiveComponent(null)}
          >
            Dashboard
          </a>
          <span className="text-gray-500">/</span>
          <span className="text-black font-semibold">{getBreadcrumb()}</span>
        </nav>
      </div>

      <div className="container mx-auto px-4 py-16">
        {activeComponent ? (
          // Show the selected component
          <div>{renderComponent()}</div>
        ) : (
          // Display buttons in a horizontal row with spacing
          <div className="flex justify-center items-center gap-8">
            <button
              className="bg-black text-yellow-300 px-8 py-4 rounded-md font-bold text-lg shadow-md hover:bg-gray-900"
              onClick={() => setActiveComponent("upload")}
            >
              Upload Movie
            </button>

            <button
              className="bg-black text-yellow-300 px-8 py-4 rounded-md font-bold text-lg shadow-md hover:bg-gray-900"
              onClick={() => setActiveComponent("edit")}
            >
              Edit Movie Details
            </button>

            <button
              className="bg-black text-yellow-300 px-8 py-4 rounded-md font-bold text-lg shadow-md hover:bg-gray-900"
              onClick={() => setActiveComponent("userLogs")}
            >
              View User Logs
            </button>

            <button
              className="bg-black text-yellow-300 px-8 py-4 rounded-md font-bold text-lg shadow-md hover:bg-gray-900"
              onClick={() => setActiveComponent("myLogs")}
            >
              My Logs
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
