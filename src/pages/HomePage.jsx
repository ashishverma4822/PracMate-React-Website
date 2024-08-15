import React from 'react';
import { motion } from 'framer-motion';

function HomePage() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col items-center p-6 sm:p-8 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg">
      {/* Hero Section */}
      <motion.div
        className="flex flex-col items-center max-w-4xl mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-100">E-Learning: Learn in Your Way</h2>
        <p className="text-gray-300 mb-6">
          Discover a new way of learning with our platform that offers a variety of courses tailored to your needs. Learn at your own pace and enhance your skills from the comfort of your home.
        </p>
        <motion.img
          src="https://images.unsplash.com/photo-1666249245722-0a122db51a00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJvb2tzJTIwd2l0aCUyMHBob25lfGVufDB8fDB8fHww"
          alt="E-learning"
          className="max-w-xs sm:max-w-md rounded-lg mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8">
          <motion.button
            className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply Now
          </motion.button>
          <motion.button
            className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read More
          </motion.button>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="max-w-4xl mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-200 text-center">Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="bg-gray-800 p-6 rounded-lg text-center"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg sm:text-xl font-semibold text-gray-300 mb-2">Flexible Learning</h4>
            <p className="text-gray-400">
              Study at your own pace with our flexible course schedules that fit around your life.
            </p>
          </motion.div>
          <motion.div
            className="bg-gray-700 p-6 rounded-lg text-center"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg sm:text-xl font-semibold text-gray-300 mb-2">Expert Instructors</h4>
            <p className="text-gray-400">
              Learn from industry experts who provide valuable insights and practical knowledge.
            </p>
          </motion.div>
          <motion.div
            className="bg-gray-600 p-6 rounded-lg text-center"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg sm:text-xl font-semibold text-gray-300 mb-2">Interactive Content</h4>
            <p className="text-gray-400">
              Engage with interactive lessons, quizzes, and assignments that enhance your learning experience.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        className="max-w-4xl mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-100 text-center">What Our Learners Say</h3>
        <div className="flex flex-col gap-8">
          <motion.div
            className="bg-gray-700 p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400 mb-4">
              "The courses are incredibly well-structured and the flexibility is unmatched. I’ve learned so much at my own pace and can apply the skills directly to my career."
            </p>
            <p className="font-semibold text-gray-300">Alex M.</p>
          </motion.div>
          <motion.div
            className="bg-gray-700 p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400 mb-4">
              "The quality of the instructors and the variety of courses available have been amazing. I highly recommend this platform to anyone looking to expand their knowledge."
            </p>
            <p className="font-semibold text-gray-300">Jordan K.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div
        className="bg-gray-800 p-6 rounded-lg max-w-4xl text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-100">Ready to Start Learning?</h3>
        <p className="text-gray-300 mb-6">
          Join our community of learners and start your journey towards new skills and knowledge today!
        </p>
        <motion.button
          className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
}

export default HomePage;
