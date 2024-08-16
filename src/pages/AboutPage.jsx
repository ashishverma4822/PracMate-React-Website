import React from 'react';
import { motion } from 'framer-motion';

function AboutPage() {
  return (
    <div className="flex flex-col items-center p-6 sm:p-8 bg-gradient-to-r from-gray-900 to-gray-700 rounded-lg space-y-12">
      <div className="m-12 p-8 bg-zinc-700 rounded-lg shadow-lg max-w-4xl mx-auto text-center">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-extrabold text-teal-400 mb-6">About Us</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            We are a leading platform providing e-learning solutions for students
            around the world. Our mission is to bring quality education to everyone
            through accessible and affordable online courses. We strive to create a
            supportive and engaging learning environment that empowers individuals
            to achieve their full potential and advance their careers.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutPage;
