import React from 'react';
import { motion } from 'framer-motion';

const Car = () => {
  return (
    <main className="flex h-screen w-[94dvw] right-0 absolute overflow-x-hidden">
      {/* Left Section (Filters) */}
      <motion.div
        className="w-1/4 p-4 bg-gray-100 border-r border-gray-200"
        id="left"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Filters Content */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Filter by:</h2>
          {/* Add filter components here */}
          <div className="mb-4">
            <label className="block text-gray-700">Rental Type</label>
            <select className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300">
              <option>Any</option>
              <option>Per day</option>
              <option>Per hour</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Available Now Only</label>
            <input type="checkbox" className="mt-1 block w-4 h-4" />
          </div>
          {/* Add more filters as needed */}
        </div>
      </motion.div>

      {/* Center Section (Vehicles List) */}
      <motion.div
        className="w-2/4 p-4 overflow-y-scroll"
        id="center-scroll"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Vehicles List Content */}
        <div>
          <h2 className="text-lg font-semibold mb-4">96 vehicles to rent</h2>
          {/* Example vehicle card */}
          <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
            <img src='/assets/car5.jpg' alt="Car" className="w-full h-32 object-cover rounded-md" />
            <h3 className="text-xl font-semibold mt-2">Ford Focus</h3>
            <p className="text-gray-600">1.5 EcoBlue MT Titanium X</p>
            <p className="text-gray-800 font-semibold">$24.00 / hour</p>
          </div>
           
          <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
            <img src='/assets/car5.jpg' alt="Car" className="w-full h-32 object-cover rounded-md" />
            <h3 className="text-xl font-semibold mt-2">Ford Focus</h3>
            <p className="text-gray-600">1.5 EcoBlue MT Titanium X</p>
            <p className="text-gray-800 font-semibold">$24.00 / hour</p>
          </div>
          {/* Add more vehicle cards as needed */}
        </div>
      </motion.div>

      {/* Right Section (Vehicle Details) */}
      <motion.div
        className="w-1/4 p-4 bg-white border-l border-gray-200"
        id="right"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Vehicle Details Content */}
        <div>
          <img src='/assets/car5.jpg' alt="Car Detail" className="w-full h-32 object-cover rounded-md" />
          <h2 className="text-lg font-semibold mt-2">Ford Focus</h2>
          <p className="text-gray-600">1.5 EcoBlue ST-Line Style 115CV</p>
          <p className="text-gray-800 font-semibold">$28.00 / hour</p>
          {/* Add more detailed content and actions here */}
        </div>
      </motion.div>
    </main>
  );
};

export default Car;
