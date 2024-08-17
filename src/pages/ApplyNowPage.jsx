import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ApplyNowPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/thank-you-2');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6 rounded-lg">
      <h1 className="text-4xl font-bold mb-6 text-teal-400">Apply Now</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-300 text-lg font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 text-lg font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>
        <div className="text-center">
          <motion.button
            type="submit"
            className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Application
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default ApplyNowPage;
