import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const GetStartedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 p-6 flex items-center justify-center">
      <motion.div
        className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-4xl w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6 text-teal-400 text-center">Get Started with PracMate</h1>
        <p className="text-lg leading-relaxed mb-6">
          Welcome to PracMate, your gateway to a world of knowledge and skills. Whether you’re looking to advance in your career, explore a new hobby, or simply learn something new, our platform is here to help you achieve your goals.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Getting started is easy. Follow these simple steps to begin your learning journey with us:
        </p>
        <ul className="list-decimal list-inside mb-6 text-lg space-y-4">
          <li>Create an account by signing up with your email or using social login options.</li>
          <li>Explore our wide range of courses and select the ones that interest you.</li>
          <li>Enroll in the courses of your choice and access them anytime, anywhere.</li>
          <li>Participate in interactive lessons, complete assignments, and track your progress.</li>
          <li>Earn certificates and showcase your new skills to the world.</li>
        </ul>
        <p className="text-lg leading-relaxed mb-6">
          Our platform is designed to be user-friendly and accessible, ensuring that you have everything you need to succeed. Join our community of learners today and take the first step towards a brighter future.
        </p>
        <div className="text-center">
          <motion.button
            className="px-8 py-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600 shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/courses')}
          >
            Explore Courses
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default GetStartedPage;
