import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function ReadMorePage() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/apply');
  };

  return (
    <div className="flex flex-col items-center p-6 sm:p-8 bg-gradient-to-r from-gray-900 to-gray-700 rounded-lg space-y-12">
      <motion.div
        className="flex flex-col items-center max-w-4xl text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-teal-400">About Our E-Learning Platform</h2>
        <p className="text-gray-300 mb-6 text-lg sm:text-xl">
          Our platform offers a wide range of courses designed to help you achieve your learning goals. Whether you’re looking to pick up a new skill, deepen your knowledge in a specific field, or advance your career, we have something for everyone.
        </p>
        <motion.img
          src="https://images.unsplash.com/photo-1666249245722-0a122db51a00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJvb2tzJTIwd2l0aCUyMHBob25lfGVufDB8fDB8fHww"
          alt="Learning"
          className="max-w-xs sm:max-w-md rounded-lg mb-8 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <p className="text-gray-300 mb-6 text-lg sm:text-xl">
          Our courses are crafted by industry experts who bring their practical experience to the table. With a focus on interactive content, we ensure that learning is engaging and effective.
        </p>
        <p className="text-gray-300 mb-6 text-lg sm:text-xl">
          Join a community of learners who are passionate about growth and development. Explore our diverse course offerings and find the one that best fits your needs.
        </p>
        <motion.button
          className="px-8 py-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600 shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-500"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGetStartedClick} 
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
}

export default ReadMorePage;
