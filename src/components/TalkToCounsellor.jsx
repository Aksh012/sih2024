import React, { useState } from "react";


const TalkToCounsellor = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    slot: "June",
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with details:", formData);
  };

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen z-0 relative" >
      {/* Hamburger Icon for Small Screens */}
      <div className="lg:hidden p-4">
        <button onClick={toggleSidebar} className="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar - Show only on large screens or when menu is toggled */}
      <div
        className={`bg-gray-100 w-full lg:w-1/4 p-6 fixed lg:relative transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0`}
      >
        <div className="mb-8">
          <div className="h-16 w-16 rounded-full bg-orange-400 mb-4"></div>
          <h2 className="text-xl font-bold">Hello, Simon Sinek</h2>
          <p className="text-sm text-gray-500">
            Edit your profile | Track your applications
          </p>
        </div>
        <ul className="space-y-4">
          <li className="text-orange-500 font-semibold cursor-pointer">Home</li>
          <li className="cursor-pointer">Profile</li>
          <li className="cursor-pointer">My Vault</li>
          <li className="cursor-pointer">My Learning Roadmap</li>
          <li className="cursor-pointer">My Applications</li>
          <li className="cursor-pointer">Talk to my Counsellor</li>
          <li className="cursor-pointer">Account Settings</li>
        </ul>
      </div>

      {/* Overlay for mobile menu */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-grow bg-white p-6">
        <h2 className="text-2xl font-bold mb-4">Talk to my Counsellor</h2>
        <p className="text-gray-600 mb-6">
          Get expert advice with your counsellor
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Slot selection */}
          <div className="flex items-center">
            <label className="block text-lg font-medium mr-4">
              Pick your Slot
            </label>
            <select
              name="slot"
              value={formData.slot}
              onChange={handleInputChange}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
            >
              <option value="June">June</option>
            </select>
          </div>

          {/* Name input */}
          <div>
            <label className="block text-lg font-medium mb-2">Your name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
              placeholder="Your full name"
            />
          </div>

          {/* Email input */}
          <div>
            <label className="block text-lg font-medium mb-2">Email ID</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
              placeholder="eg: ryan453@gmail.com"
            />
          </div>

          {/* Contact number input */}
          <div>
            <label className="block text-lg font-medium mb-2">
              Contact number
            </label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
              placeholder="Your contact number"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-500"
          >
            Send me the details
          </button>
        </form>
      </div>
    </div>
  );
};

export default TalkToCounsellor;
